import $ from "jquery"
import "./app3.css"

const html =`
<section id="app3">
    <div class="square"></div>
</section>
`
const $element =$(html).appendTo($('body>.page'))

const $square = $("#app3 .square")
const localKey = 'app3.active'
// active 有三种情况： 更改了：yes 没有更改：no 默认： undefined
const active = localStorage.getItem(localKey) === 'yes'

// 如果原先的 active 状态是 yes，那么在刷新就把这个 active 加在上面。 如果原先是 no 就去掉
$square.toggleClass('active',active)

// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// }

$square.on("click", () => {
  if($square.hasClass('active')){
    $square.removeClass('active')
    localStorage.setItem(localKey,'no')
  }else{
    $square.addClass('active')
    localStorage.setItem(localKey,'yes')
  }
  // $square.toggleClass("active");
  // toggleClass 如果有这个class属性就删掉，如果没有就加上
});
