const bcrypt = require('bcrypt');
const userSchema = require('../../model/user');
const users = require('../../model/user');
const projects = require('../../model/projects');
const saltRounds = 10;
module.exports = {
    signUp : async (req,res)=>{
        const {name,email,password} = req.body;
        const alreadyExist = await userSchema.findOne({email:email})
        if(alreadyExist){
            return res.json({status:"User already Exist"})
        }
        let lastid;
			const id = await userSchema.find().sort({ _id: -1 }).limit(1);
			if (id.length > 0) {
				lastid = Number(id[0].publisher_id.replace("CD", "")) + 1;
			} else {
				lastid = "1";
			}
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            const newUser = new userSchema({ name, email, password: hash,publisher_id: "CD" + lastid,status: "Active",bio: "",
            title: "",avatar:"" });
            await newUser.save();
            req.session.email = email;
			req.session.publisher_id = "CD" + (lastid + 1);
            return res.json({ status: "User created successfully" });
        }); 
    },
    login: async (req,res)=>{
        const user = await userSchema.findOne({email:req.body.email})
        if(!user)return res.json({status:'User not exist'})
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(!result) return res.json({status:false})
            req.session.email = req.body.email;
			req.session.publisher_id = user.publisher_id;
            res.json({status:true})
        });
    },
    getDevelopers: async(req,res)=>{
        const users = await userSchema.find()
        res.json(users)
    },
    getDeveloperDetails: async (req,res)=>{
        const developerDetails = await userSchema.findOne({publisher_id:req.params.publisher_id});
        const developerProjects = await projects.find({publisher_id:req.params.publisher_id})
        const stacks_used = Array.from(new Set(developerProjects.map(item=>item.frameworks_used).flat()))
        const viewsAndCount = await projects.aggregate([
            {
                $match: {
                    publisher_id: req.params.publisher_id,
                },
            },
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: "$views" },
                    projectsCount: { $sum: 1 },
                },
            },
            { $unset: ["_id"] },
        ]);
        res.json({
            developer:developerDetails,
            projects:developerProjects,
            views:viewsAndCount[0]?.totalViews ,
            projectsCount:viewsAndCount[0]?.projectsCount ,
            stacks_used:stacks_used
        })
    },getProfile: async (req,res)=>{
        const email = req.session.email
        const profile = await userSchema.findOne({email:email});
        res.json(profile)
    }
}