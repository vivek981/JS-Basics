const print_text = text => alert(text);

var num_arr = [];
var people_data = []

var html = "<table border='1|1'>";
for (var i = 0; i < people_data.length; i++) {
    html+="<tr>";
    html+="<td>"+people_data[i].name+"</td>";
    html+="<td>"+people_data[i].age+"</td>";
    html+="<td>"+people_data[i].email+"</td>";
    
    html+="</tr>";

}
html+="</table>";
// var element = document.createElement('div');
// element.setAttribute('id', 'box');
// document.body.appendChild(element);
document.getElementById("box").innerHTML = html;

const add_number = number => {
    num_arr.push(number);
    document.getElementById('array_container').innerHTML = 'Elements in the array: [' + num_arr.join(',') + ']';
    document.getElementById('num_to_be_added').value = '';
};

const remove_number = () => {
    if (!num_arr.length){
        alert('Array is Empty');
        return ;
    }
    num_arr.pop();
    if (!num_arr.length){
        document.getElementById('array_container').innerHTML = 'Elements in the array: []';
    }
    else{
        document.getElementById('array_container').innerHTML = 'Elements in the array: [' + num_arr.join(',') + ']';    
    }
    document.getElementById('num_to_be_added').value = '';
};


const find_number = number => {
    if (!number){
        alert('please provide valid input');
        return;
    }
    if (!num_arr.length){
        alert('Array is Empty');
        return ;
    }
    let i=0;
    console.log(num_arr);
    while (i < num_arr.length){
        if (number == num_arr[i]){
            alert(`Element is present in the array at index: ${i}`);
            return ;
        }
        i = i+1;
    }
    alert('Element is not present in the array')
};

function refresh_data() {
    html = "<table border='1|1'>";
    for (let i = 0; i < people_data.length; i++) {
        html+="<tr>";
        html+="<td>"+people_data[i].name+"</td>";
        html+="<td>"+people_data[i].age+"</td>";
        html+="<td>"+people_data[i].email+"</td>";
        
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("box").innerHTML = html;

}

const add_people = (name, age, email) => {
    let person = new Object();
    person.name = name;
    person.age = age;
    person.email = email;
    people_data.push(person);
    console.log(person);
    refresh_data();
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    return ;

};


async function loadUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    let user_data =  await users.json();
    console.log(user_data);


}