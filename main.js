// variables 
const tbody = document.getElementById('tbody');
const calculer_tous = document.getElementById('calAll');
const delete_all = document.getElementById('delAll');
const generate = document.getElementById('generate');
const avanc_rapide = document.getElementById('avanc_rapide');
const avanc_moyen = document.getElementById('avanc_moyen');
const avanc_long = document.getElementById('avanc_long');

// users
var users = [
    {
        Matricule : '54126',
        username : 'yassine bendahui'
    },
    {
        Matricule : '15487',
        username : 'amal alami'
    },
    {
        Matricule : '96587',
        username : 'jihan mansouri'
    },
    {
        Matricule : '52364',
        username : 'khalid idrissi'
    },
    {
        Matricule : '21478',
        username : 'ghita tazi'
    },
    {
        Matricule : '96325',
        username : 'ayoub sidiki'
    },
    {
        Matricule : '89647',
        username : 'anass ahmadi'
    },
]
// lister users 
function listeUser(arr = []){
   arr.map(item=>{
    const row = document.createElement('tr');
    row.innerHTML    = `
    <td>${item.Matricule}</td>
    <td>${item.username}</td>
    <td><input type="number" min="0" max="20" ></td>
    <td><input type="number" min="0" max="20"></td>
    <td><input type="number" min="0" max="20"></td>
    <td><input type="number" min="0" max="20"></td>
    <td><input type="number" min="0" max="20"></td>
    <td><input type="text" id='sumResult'></td>
    <td><input type="text" id='moyenne'></td>
    <button id='calBtn'>calculer</button>
    `
    tbody.appendChild(row)

  
   })

   // calcule One by One 
   const calcule_buttons = document.querySelectorAll('#calBtn');
   
    calcule_buttons.forEach(btn=>{
     btn.addEventListener('click',()=>{
       const btnId = btn.parentElement;
       const inputs = btnId.querySelectorAll("input[type='number']");
       let sum = 0;
       inputs.forEach((input)=>{
        const note = parseFloat(input.value);
        const Sum = sum += note
        let val = Sum /5
        if (!isNaN(note)) {
         const displayResult = btnId.querySelectorAll('#sumResult');
         displayResult.forEach(result=>{
            result.value = `${val}/20`;
         })
        }else{
            alert('invalid note');
            const displayResult = btnId.querySelectorAll('#sumResult');
            const mension = btnId.querySelectorAll('#moyenne');

            displayResult.forEach(result=>{
            result.value = "" ;
            })
          
            mension.forEach(item=>{
                item.value = "";
             })
        }

        const mension = btnId.querySelectorAll('#moyenne');
        mension.forEach(item=>{
            switch (true) {
                
                case val >= 18.50:
                    item.value = 'tres-bien'
                    break;

                    case val >= 16:
                        item.value = 'bien'
                       break;

                       case val >= 13:
                        item.value = 'assez-bien'
                        break;     

                        case val > 10:
                            item.value = 'passable'
                            break;
  
                            case val < 10:
                                item.value = 'failed'
                                break;
                                                
                     
                default:
                    break;
            }
        })
        
       })
       
     })
   })    

  // calcule tous
  calculer_tous.addEventListener('click',()=>{
    const table_rows = tbody.querySelectorAll('tr');
       table_rows.forEach(row=>{
          const table_cells = row.querySelectorAll('td input[type="number"]');
          let sum = 0;
          table_cells.forEach(cell=>{
            const note = parseFloat(cell.value)
            const Sum = sum += note;
            let val = Sum / 5;
            if(!isNaN(note)){
                const displayResult = row.querySelectorAll('#sumResult');
                displayResult.forEach(result=>{
                   result.value = Sum;
                })

                const mension = row.querySelectorAll('#moyenne');
                mension.forEach(item=>{
                    switch (true) {
                
                        case val >= 18.50:
                            item.value = 'tres-bien'
                            break;
        
                            case val >= 16:
                                item.value = 'bien'
                               break;
        
                               case val >= 13:
                                item.value = 'assez-bien'
                                break;     
        
                                case val > 10:
                                    item.value = 'passable'
                                    break;
          
                                    case val < 10:
                                        item.value = 'failed'
                                        break;
                                                        
                             
                        default:
                            break;
                    }
                })
            } 

            
     
          })
       })
  })

  //effacer tous    
  delete_all.addEventListener('click',()=>{
     const table_rows = tbody.querySelectorAll('tr');
     table_rows.forEach(row=>{
        const table_cells = row.querySelectorAll('td input');
        table_cells.forEach(cell=>{
            cell.value = ""
        })
     })
  })  

// generate
  function initialObject(){
    object = {
        seccess: 0,
        failed: 0
    }
 }
 
 generate.addEventListener('click',()=>{
         initialObject()
    const table_rows = tbody.querySelectorAll('tr');
    table_rows.forEach(row=>{
        const moyen = row.querySelectorAll('td input[id="moyenne"]');
        moyen.forEach(item=>{
            console.log(item.value)
            calculeDecision(item.value)
            avanc_long.innerHTML = object.failed
            avanc_rapide.innerHTML = object.seccess
        })
    })
 })
 


 function calculeDecision(key) {
    switch (key) {

        case 'failed':
            object.failed += 1;
            break;

        case 'tres-bien':
            object.seccess += 1;
            break;

            case 'bien':
                object.seccess += 1;
                break;


                case 'assez-bien':
                    object.seccess += 1;
                    break;

                    case 'passable':
                        object.seccess += 1;
                        break;

      
    }
 }
 



}



listeUser(users);
