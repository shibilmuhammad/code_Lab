const bcrypt = require('bcrypt');
const userSchema = require('../../model/user');
const users = require('../../model/user');
const projects = require('../../model/projects');
const saltRounds = 10;



const firebase = require("firebase/app");

const { FirebaseError, initializeApp } = require("firebase/app");
const isBase64 = require("is-base64");
const {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyAoenVgH_QAnCzh9iVUwv2qAaAmEia8FDQ",
    authDomain: "codelab-9ee16.firebaseapp.com",
    projectId: "codelab-9ee16",
    storageBucket: "codelab-9ee16.appspot.com",
    messagingSenderId: "509482161524",
    appId: "1:509482161524:web:c2a4295e9604532fa88821",
    measurementId: "G-M4TR95HV4N"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = getStorage();
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
    },editProfile:async (req,res)=>{
        let {name,title,bio,avatar}= req.body;
        const updateFields = {};
        if (name !== '')  updateFields.name = name;
        if(avatar==='/static/media/dev.5b6adb8e38ee506fde52.png'){
            updateFields.avatar = "";
            return updateDb()
        }
        if(!isValidUrl(avatar) && avatar!=='/static/media/dev.5b6adb8e38ee506fde52.png'){
            file = base64ImageToBlob(avatar);
				const storageRef = ref(
					storage,
					"avatar/" + Date.now() + "." + file.type.split("/")[1]
				);
				uploadBytes(storageRef, file).then((snapshot) => {
					("Uploaded file!");
					getDownloadURL(snapshot.ref).then(async (item) => {
                        updateFields.avatar = item;
                        updateDb()
					});
				});
        }else{
            updateDb()
        }
         async function updateDb (){
            updateFields.title = title;
            updateFields.bio = bio;
            try {
                await userSchema.findOneAndUpdate(
                    { email: req.session.email },
                    updateFields,
                    { new: true } 
                );
                res.json({staatus:true})
            } catch (error) {
                console.error( error);
            }
        }
	},getMyProjects : async(req,res)=>{
        const developerProjects = await projects.find({publisher_id:req.session.publisher_id})
        res.json(developerProjects)
    }

}
const isValidUrl = (str) => {
	const pattern = new RegExp(
		"^([a-zA-Z]+:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$", // fragment locator
		"i"
	);
	return pattern.test(str);
};

function base64ImageToBlob(str) {
	// extract content type and base64 payload from original string
	var pos = str.indexOf(";base64,");
	var type = str.substring(5, pos);
	var b64 = str.substr(pos + 8);

	// decode base64
	var imageContent = atob(b64);

	// create an ArrayBuffer and a view (as unsigned 8-bit)
	var buffer = new ArrayBuffer(imageContent.length);
	var view = new Uint8Array(buffer);

	// fill the view, using the decoded base64
	for (var n = 0; n < imageContent.length; n++) {
		view[n] = imageContent.charCodeAt(n);
	}

	// convert ArrayBuffer to Blob
	var blob = new Blob([buffer], { type: type });

	return blob;
}