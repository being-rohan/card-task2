var cl = console.log;
const formcontrol = document.getElementById('form')
const titlecontrol = document.getElementById('title')
const contentcontrol = document.getElementById('content')
const blogcontrol = document.getElementById('blogcontainer')

let bogsarray = [
    {
        title: 'html',
        content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        title: 'javascript',
        content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    }
]
const onclick = eve => {
    eve.preventDefault();
    let obj = {
        title: titlecontrol.value,
        content: contentcontrol.value.trim()
    }
    createblog(obj)
        .then((res) => {
            bogsarray.push(res)
            return readblog(res)

        })
        .then((res) => {
            cl(res)
            blogtemplating(bogsarray)
            Swal.fire(
                'Good job!',
                'You have created a blog',
                'successfully'
              )


        })
        .catch((err) => {
            cl(err)
        })
        .finally((eve)=>{
            eve.reset()
        })

}
const createblog = eve => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            if (!err) {
                resolve(eve);

            } else {
                reject('something went wrong')
            }
        }, 500)

       
    }
    )
    return promise;
}



const readblog = (ele) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            if (!err) {
                resolve(ele);

            } else {
                reject('something went wrong')
            }
        }, 500)
        

    })
    return promise;
}

const blogtemplating = eve => {
    let result = '';
    eve.forEach(ele => {
        result += `
        <div class="row mb-4">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header">
                    <h1>${ele.title}</h1>
                </div>
                <div class="card-body">
                    <p>${ele.content}</p>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
        
        `
    })
    blogcontainer.innerHTML = result;
}

blogtemplating(bogsarray);



formcontrol.addEventListener('submit', onclick)
