var nums = document.querySelectorAll(".nums");
var initialBgColor = nums[0].style.backgroundColor;
var initialColor = nums[0].style.color;

var flag = 0;
var value = 0;
var selectedNum = null;

nums.forEach(function(i){
    i.addEventListener("click", function(){
        // if selected number is same i.e., it is clicked again
        if(selectedNum === i) {
            i.style.backgroundColor = initialBgColor;
            i.style.color = initialColor;
            value = 0;
            selectedNum = null;
        }
        else {
            // if selected number is different
            if(selectedNum) {
                // change the style of previously selected number
                selectedNum.style.backgroundColor = initialBgColor;
                selectedNum.style.color = initialColor;
                value = 0;
            }
            
            // update the style for current number
            selectedNum = i;
            i.style.backgroundColor = "hsl(216, 12%, 54%)";
            i.style.color = "white";
            value = i.textContent;
        }
        
    })
})

var btn = document.querySelector("button");
var ratingCard = document.querySelector(".rating-start");
var thankYouCard = document.querySelector(".rating-end");
var newVal = document.querySelector("span");

btn.addEventListener("click", function(){
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
    newVal.textContent = value;
})
