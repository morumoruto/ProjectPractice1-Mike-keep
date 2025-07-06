function get_data() {
    let display=document.getElementById("undou").value;
    let value1=document.getElementById("data1");
    let value2=document.getElementById("data2");
    val1 = Number(value1.value)
    val2 = Number(value2.value)
    switch (display) {
        case 'running':
            eel.running(val1,val2)(output);
            break;
        case 'radio1':
            eel.radio1(val1,val2)(output);
            break;
        case 'radio2':
            eel.radio2(val1,val2)(output);
            break;
        case 'walking':
            eel.walking(val1,val2)(output);
            break;
        case 'climbing':
            eel.climbing(val1,val2)(output);
            break;
        case 'cycling':
            eel.cycling(val1,val2)(output);
            break;
        case 'yoga':
            eel.yoga(val1,val2)(output);
            break;
        case 'stretch':
            eel.stretch(val1,val2)(output);
            break;
        case 'swimming':
            eel.swimming(val1,val2)(output);
            break;
        case 'badminton':
            eel.badminton(val1,val2)(output);
            break;
        case 'tennis':
            eel.tennis(val1,val2)(output);
            break;
    }
}

function clear() {
    (document.getElementById("data2")).value="";
    (document.getElementById("data1")).value="";
}

function output(result) {
    document.querySelector("input[id='output']").value=result;
    let data3=document.getElementById("data3");
    val3 = Number(data3.value)
    if (result > val3) {
        document.getElementById("word").textContent="がんばったね！";
    }else{
        document.getElementById("word").textContent="もう少し頑張ろう！";
    }
}