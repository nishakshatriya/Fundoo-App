import {ApiCall} from "./apiCalls";
const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
const token = localStorage.getItem("token"); 
class NotesServices { 
   
    createNew(data){ 
        return ApiCall(data, `${URL}addNotes?access_token=${token}`,"POST");
    }

    trashNote(data){
        return ApiCall(data, `${URL}trashNotes?access_token=${token}`,"POST")
    }
    
}
export default new NotesServices();
