const questions = [
{
title:"🌼 ถ้าต้องเลือกหนึ่งคำ เพื่ออธิบายตัวเองในช่วงอายุ 19",
subtitle:"Nếu chỉ dùng một từ để miêu tả bản thân ở tuổi 19...",
choices:["เติบโต","มีความสุข","พยายาม","กล้าหาญ"]
},
{
title:"อะไรคือสิ่งที่เธอภูมิใจที่สุดในปีที่ผ่านมา",
subtitle:"Điều khiến em tự hào nhất trong năm qua là gì?",
choices:["ครอบครัว","การเรียน","ความรัก","ตัวเอง"]
}
];

let current = 0;

function showQuestion(){

document.getElementById("progress").innerHTML=(current+1)+" / 5";

document.getElementById("title").innerHTML=questions[current].title;

document.getElementById("subtitle").innerHTML=questions[current].subtitle;

let html="";

questions[current].choices.forEach(choice=>{

html+=`<button class="choice">${choice}</button>`;

});

document.getElementById("choices").innerHTML=html;

document.querySelectorAll(".choice").forEach(btn=>{

btn.onclick=()=>{

current++;

if(current<questions.length){

showQuestion();

}else{

document.querySelector(".card").innerHTML=`
<h1>💛</h1>
<h2 style="text-align:center">ขอบคุณที่ตอบคำถาม</h2>
<p style="text-align:center;margin-top:20px;">
แต่จริง ๆ แล้ว...<br><br>
นี่เป็นเพียงจุดเริ่มต้นของของขวัญสำหรับมาย 🌼
</p>
`;

}

}

})

}

showQuestion();