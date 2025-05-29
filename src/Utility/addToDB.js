const getToRedBook =()=>{
    const storedBookd = localStorage.getItem("readList")
    if(storedBookd){
        const storeBookData = JSON.parse(storedBookd)
        return storeBookData
    }else{
        return []
    }
}

const addToStoreDB= (id) => {
    const storedBookData = getToRedBook()
    if(storedBookData.includes(id)){
        alert("ai id already exsit")
    }else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
    }

}
 
export {addToStoreDB,getToRedBook}