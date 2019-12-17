document.addEventListener('DOMContentLoaded', function()
{
	window.onscroll = function() {Stick()};

	var navbar = document.getElementById("Menu");
	var top = navbar.offsetTop;

	function Stick()
	{
	  if(window.pageYOffset >= top)
	  	navbar.classList.add("Sticky");
	  else
	    navbar.classList.remove("Sticky");
	}
});

window.onload = function()
{
	var Index = 0;
	var x = document.getElementsByClassName("Slide");
	NextSlide();
	function NextSlide()
	{
		if(Index==0) x[3].style.display = "none";
		else x[Index-1].style.display = "none";
		if(Index==x.length) Index = 0;
		x[Index].style.display = "flex";
		Index++;
		setTimeout(NextSlide,6000);
	}
}