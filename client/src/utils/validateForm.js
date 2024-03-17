
export const validateAddproject = (title,category,liveLink,overview,scrnshot,features,thumbline,framework,db,projectLink)=>{
    if(title.trim()==='') return 'Title can not be empty!!'
    if(category==='choose') return 'Category can not be empty!!'
    if(liveLink){
        if (!isValidURL(liveLink)) return 'Invalid live link!!';
    }
    if(projectLink.trim()==='') return "Project Link can't be empty!!"
    if (!isValidURL(projectLink)) return 'Invalid Project link!!';
    if(overview.trim()==='') return 'overView can not be empty!!'
    if(!scrnshot) return "Screenshot required"
    if(features==='<p><br></p>' || features === null) return 'Featurese can not be empty!!'
    if(!thumbline) return "Thumbline is  required"
    if(framework==='choose') return 'FrameWork can not be empty!!'
    return null
}
function isValidURL(url) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}