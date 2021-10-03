//Notice Settings
var ShowNotice = true;
var CurrentFooterNotice = ""+
    "<p style=\"display: inline;\">If anything is missing : </p>\n" +
    "<a href=\"https://elientwistleportfolio.wordpress.com/\" target=\"_blank\" class=\"NavigationLink\" style=\"color: black; display: inline; text-decoration: underline;\">check out the old site</a>\n" +
    "";
//Other vars
var DocumentPreHTML = document.body.innerHTML;
var DoHideNotice = sessionStorage.getItem("DoHideNotice");

//Create Top Navbar
document.body.innerHTML = "" +
    "<h1 class='Title'> " +
        "<img class = 'AvitarIcon' src='/Images/Avatar.png' alt='Robot Holding Wrench' width='200px' height='200px'> " +
        "<a href='https://elientwistle.com' class='Title'>Eli Entwistle's Portfolio</a> " +
    "</h1> " +
    "<div class='SubTitle'> <a class='SubTitleButtons' href='https://www.elientwistle.com'>Homepage</a> <span style='position: center; text-align: right; margin-left: 5%'>Projects: <a class='SubTitleButtons' href='https://www.elientwistle.com/Pages/TurningTides' style='margin-left: 10px;'>Turning Tides</a> <a class='SubTitleButtons' href='https://www.elientwistle.com/Pages/StellarRampart'>Stellar Rampart</a></span> <a class='SubTitleButtons' href='https://www.elientwistle.com/Pages/CreativeClockworks'>Other Projects</a></div>";

//Create Footer
function CreateNoticePopup()
{
    var CloseButton = "<button style='text-align: right; position: fixed; right: 10px; padding: 2px' id='CloseNoticeButton'><img style='width: 35px; height: auto;' src='https://cdn-icons-png.flaticon.com/512/463/463612.png'></button>";
    
    //Create Notice Look
    if(document.body.getElementsByClassName("footer")[0] == null)
    {
        //TYPE NOTICE HERE: 
        document.body.innerHTML += "<footer class=\"footer\">\n" + CloseButton +CurrentFooterNotice+
            "</footer>";
    }else
    {
        document.body.getElementsByClassName("footer")[0].innerHTML = CloseButton + CurrentFooterNotice;
    }
    
    //Find Notice Look and add listener
    document.getElementById("CloseNoticeButton").addEventListener("click", function ()
    {
        //Hide Footer Button
        document.getElementsByClassName("footer")[0].innerHTML = ""+
            "<button class='footer-button' id='CloseNoticeButton'> <img style='width: 40px; height: auto; padding: 0;' src='https://cdn-icons-png.flaticon.com/512/5087/5087438.png'> </button>"+
            "</footer>";
        document.getElementsByClassName("footer")[0].classList.add("footer-Hidden");
        sessionStorage.setItem("DoHideNotice","true");
        
        //Show Footer Button
        document.getElementsByClassName("footer-button")[0].addEventListener("click",function ()
        {
            document.body.getElementsByClassName("footer")[0].classList.remove("footer-Hidden");
            document.body.getElementsByClassName("footer")[0].innerHTML = "";
            sessionStorage.setItem("DoHideNotice","false");
            CreateNoticePopup();
        });
    })
    
    //Hide notice if it was closed already
    if(sessionStorage.getItem("DoHideNotice") === "true") 
    {
        document.getElementById("CloseNoticeButton").click();
    }
}

//Start Code
document.body.innerHTML += DocumentPreHTML;
sessionStorage.setItem("DoHideNotice","true"); //start with hidden
if(ShowNotice)
{
    CreateNoticePopup();
}
