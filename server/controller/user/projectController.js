
const projectSchema = require('../../model/projects')
const firebase = require("firebase/app");

const { FirebaseError, initializeApp } = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyAoenVgH_QAnCzh9iVUwv2qAaAmEia8FDQ",
    authDomain: "codelab-9ee16.firebaseapp.com",
    projectId: "codelab-9ee16",
    storageBucket: "codelab-9ee16.appspot.com",
    messagingSenderId: "509482161524",
    appId: "1:509482161524:web:c2a4295e9604532fa88821",
    measurementId: "G-M4TR95HV4N"
  };
    require("dotenv").config();
    const OpenAI = require("openai");
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API,
    });

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const {
        getStorage,
        ref,
        uploadBytes,
        getDownloadURL,
    } = require("firebase/storage");

    const storage = getStorage()
    require("dotenv").config();

   module.exports = {
    
    addProject:async (req,res)=>{
        const currentDate = new Date();
		const day = currentDate.getDate();
		const month = currentDate.getMonth() + 1; // Add 1 as months are zero-based
		const year = currentDate.getFullYear();
		const date2 = `${month}-${day}-${year}`;
        let lastid;
		const id = await projectSchema.find().sort({ _id: -1 }).limit(1);
		if (id.length > 0) {
			lastid = id[0].project_id;
		} else {
			lastid = 0;
		}
        const screenShotList = req.body.screenShot;
        const thumbnail = base64ImageToBlob(req.body.thumbnail);
		var screenshotsLinks = [];
		var thumbnailLink = "";
		const {
			title,
			category,
            projectLink,
			liveLink,
			overview,
			features,
            framework,
            database
		} = req.body;
        //upload screen shots and get link
        screenShotList.map((item) => {
			const blobfile= base64ImageToBlob(item);
			const storageRef = ref(
				storage,
				"screenshots/" + Date.now() + "." + blobfile.type.split("/")[1]
			);
			uploadBytes(storageRef, blobfile).then((snapshot) => {
				("uploaded");
				getDownloadURL(snapshot.ref).then((item) => {
					screenshotsLinks.push(item);
				});
			});
		});
          //upload thumbnail and get link
          const storageRef = ref(
			storage,
			"thumbnail/" + Date.now() + "." + thumbnail.type.split("/")[1]
		);
		uploadBytes(storageRef, thumbnail).then((snapshot) => {
			("Uploaded file!");
			getDownloadURL(snapshot.ref).then(async (item) => {
				thumbnailLink = item;
				const response = await openai.chat.completions.create({
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "system",
							content:
								"You will be provided with a block of text, and your task is to extract a list of keywords from it. it will be given as comma seperated values..example task,new,store",
						},
						{
							role: "user",
							content: overview,
						},
					],
					temperature: 0.5,
					max_tokens: 64,
					top_p: 1,
				});
				const newProject = new projectSchema({
					publisher_id: req.session.publisher_id,
					title: title,
					project_id: lastid + 1,
					category: category,
					live_link: liveLink,
					overview: overview,
					frameworks_used: framework,
					db_used: database,
					screenshots: screenshotsLinks,
					thumbnail: thumbnailLink,
					features: features,
					project_link: projectLink,
					publisher: "Shibil",
					published_date: date2,
					last_updated: date2,
					views: 0,
					downloads: 0,
					status: "Pending",
					price: "Free",
					keywords:
						title.split(" ").join(",") +
						" , " +
						response?.choices[0]?.message?.content,
				});
				newProject.save();
			});
		});

        res.json({
            status:"success"
        })
	},
    getLatestList: async (req, res) => {
		
		try {
			const data = await projectSchema.find().sort({ _id: -1 }).limit(2);
			res.json(data);
		} catch (error) {
			(error);
		}
	},
	getPopularList: async (req, res) => {
		try {
			const data = await projectSchema.find().sort({views: -1 }).limit(2);
			res.json(data);
		} catch (error) {
			(error);
		}
	},
	getCategoryList: async (req, res) => {
		try {
			const data = await categorySchema.find({status:"Listed"})
			res.json(data);
		} catch (error) {
			(error);
		}
	},
	getTopDevelopers: async (req, res) => {
		try {
			const data = await userSchema.find();
			res.json(data);
		} catch (error) {
			(error);
		}
	},
	getDescription:async (req,res) =>{
		try{
			const data = await projectSchema.findOne({project_id:req.params.id})
			res.json(data)
		}catch(error){
			(error);
		}
	},
    
    }

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
