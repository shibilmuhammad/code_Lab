
export const validateAddproject = (title,category,liveLink,overview,scrnshot,features,thumbline,framework,db)=>{
    if(title.trim()==='') return 'Title can not be empty!!'
    if(category.trim()==='') return 'Category can not be empty!!'
    if(liveLink.trim()==='') return 'Live link can not be empty!!'
    if(overview.trim()==='') return 'overView can not be empty!!'
    if(!scrnshot) return "Screenshot required"
    if(features.trim()==='') return 'Featurese can not be empty!!'
    if(!thumbline) return "Thumbline is  required"
    if(framework.trim()==='') return 'FrameWork can not be empty!!'
    if(db.trim()==='') return 'Database  can not be empty!!'
    return null
}
