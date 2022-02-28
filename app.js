let Name = document.getElementById('name');
let Sirname = document.getElementById('sirname');
let run = document.getElementById('click');
let output = document.getElementById('output');

function ShowOutput(){
    let A = Name.value;
    let B = Sirname.value;
    let OutputHTML = '';
    
    if(A==''&&B==''){
        OutputHTML += '<p style="color: red;">';
        OutputHTML += 'กรุณาใส่ชื่อ นามสกุล'
        OutputHTML += '</p>';
        output.innerHTML = OutputHTML;
    }
    else if(A==''||B==''){
        OutputHTML += '<p style="color: red;">';
        OutputHTML += 'กรุณาใส่ชื่อ หรือ นามสกุล'
        OutputHTML += '</p>';
        output.innerHTML = OutputHTML;
    }
    else{
        OutputHTML += '<p style="color: green;">';
        OutputHTML += 'สวัสดีคุณ' +'&nbsp'+ A +'&nbsp'+ B;
        OutputHTML += '</p>';
        output.innerHTML = OutputHTML;
    }
}

run.addEventListener('click',ShowOutput);

