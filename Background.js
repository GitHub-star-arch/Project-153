//Terrain Rotation
AFRAME.registerComponent("collision-reader",{
    schema:{
        elementID:{type:'string',default:'#ring1'}
    },
    update: function(){
        this.isCollided(this.data.elementID)
    },
    isCollided: function(id){
        const element = document.querySelector(id)
        element.addEventListener('collide',()=>{
            if (id.includes('#ring')) {
                console.log(id)
            }
            else if (id.includes('#fish')) {
                console.log(id)
            }
        })
    }
})