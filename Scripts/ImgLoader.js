let Photo_List = [
    "Bathroom.jpeg",
    "WheelChair.jpeg",
    "IMG_5132.jpeg"
]

function ShowPhotots(){
    for (let PhotoIndex = 0; PhotoIndex<Photo_List.length; PhotoIndex++){
        let NewDiv = document.createElement("div")
        NewDiv.className = "center"

        let NewImage = document.createElement("img")
        NewImage.src = `Photos/${Photo_List[PhotoIndex]}`
        let SideOffsetNum = Math.floor(Math.random()*2)
        let Margin = Math.floor(Math.random()*46)
        let Rotation = Math.floor(Math.random()*5)
        if(SideOffsetNum == 0){
            NewImage.style = `rotate: ${Rotation}deg; width: 40%; margin-left: ${Margin}vw;`
        }
        else{
            NewImage.style = `rotate: -${Rotation}deg; width: 40%; margin-right: ${Margin}vw;`
        }

        NewDiv.appendChild(NewImage)
        document.body.appendChild(NewDiv)
    }
}

ShowPhotots()