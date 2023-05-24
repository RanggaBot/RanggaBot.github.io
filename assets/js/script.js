
var point = 0;
var life = 5;

function nama_play()
{
	var text_nama;
	if (document.getElementById("text_nama").value)
	{
		document.getElementById("score").innerHTML=point;
		document.getElementById("life").innerHTML=life;
		document.getElementById("input-nama").style.visibility="hidden";
		document.getElementById("playing").style.visibility="visible";
	}
	else
	{
		alert("Masukkan nama terlebih dahulu")
	}
}
function level_1()
{
	var text_nama;
	if (document.getElementById("text_nama").value)
	{
		document.getElementById("score").innerHTML=point;
		document.getElementById("life").innerHTML=life;
		document.getElementById("input-nama").style.visibility="hidden";
		document.getElementById("playing").style.visibility="visible";
			var text = "Partai nasional indonesia";
			if (document.getElementById("text").value==text)
			{
				point++;
				document.getElementById("imageT").style.visibility="visible";
				document.getElementById("imageF").style.visibility="hidden";
				document.getElementById("lvl_1").style.visibility="hidden";
				document.getElementById("lvl_2").style.visibility="visible";
			} 
			else
			{
				life--;
				document.getElementById("imageT").style.visibility="hidden";
				document.getElementById("imageF").style.visibility="visible";
				
				if (document.getElementById("life").innerHTML==5)
				{
					document.getElementById("mati5").style.visibility="visible";
					document.getElementById("idup5").style.visibility="hidden";
				}
				if (document.getElementById("life").innerHTML==4)
				{
					document.getElementById("mati4").style.visibility="visible";
					document.getElementById("idup4").style.visibility="hidden";
				}
				if (document.getElementById("life").innerHTML==3)
				{
					document.getElementById("mati3").style.visibility="visible";
					document.getElementById("idup3").style.visibility="hidden";
				}
				if (document.getElementById("life").innerHTML==2)
				{
					document.getElementById("mati2").style.visibility="visible";
					document.getElementById("idup2").style.visibility="hidden";
				}
				if (document.getElementById("life").innerHTML==1)
				{
					document.getElementById("mati1").style.visibility="visible";
					document.getElementById("idup1").style.visibility="hidden";
					alert("Lose")+window.location.assign("score.html")
				}
			}
	}
	else
	{
		alert("Masukkan nama terlebih dahulu")
	}
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_1_skip()
{
	var text_nama;
	if (document.getElementById("text_nama").value)
	{
		document.getElementById("score").innerHTML=point;
		document.getElementById("life").innerHTML=life;
		document.getElementById("input-nama").style.visibility="hidden";
		document.getElementById("playing").style.visibility="visible";
		life--;
		document.getElementById("lvl_1").style.visibility="hidden";
		document.getElementById("lvl_2").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
	}
	else
	{
		alert("Masukkan nama terlebih dahulu")
	}
}
function level_2()
{
	var text2 = "30 september 1965";
	if (document.getElementById("text2").value==text2)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_3").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_2_skip()
{
		life--;
		document.getElementById("lvl_3").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_3()
{
	var text3 = "soekarno";
	if (document.getElementById("text3").value==text3)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_4").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_3_skip()
{
		life--;
		document.getElementById("lvl_4").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_4()
{
	var text4 = "letnan kolonel untung";
	if (document.getElementById("text4").value==text4)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_5").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_4_skip()
{
		life--;
		document.getElementById("lvl_5").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_5()
{
	var text5 = "Adam Malik";
	if (document.getElementById("text5").value==text5)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_6").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_5_skip()
{
		life--;
		document.getElementById("lvl_6").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_6()
{
	var text6 = "perjanjian konfrontasi indonesia dan malaysia";
	if (document.getElementById("text6").value==text6)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_7").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_6_skip()
{
		life--;
		document.getElementById("lvl_7").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_7()
{
	var text7 = "program replita";
	if (document.getElementById("text7").value==text7)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_7").style.visibility="hidden";
		document.getElementById("lvl_8").style.visibility="visible";
	} 
	else
	{
		life--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_7_skip()
{
		life--;
		document.getElementById("lvl_8").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_8_jwb()
{
	var text8 = "Soeharto";
	if (document.getElementById("text8").value==text8)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("lvl_8").style.visibility="hidden";
		document.getElementById("lvl_8_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("lvl_8").style.visibility="hidden";
		document.getElementById("lvl_8_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_8_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_9").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_8_skip()
{
		life--;
		document.getElementById("lvl_9").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_9_jwb()
{
	var text9 = "22 tahun";
	if (document.getElementById("text9").value==text9)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("lvl_9").style.visibility="hidden";
		document.getElementById("lvl_9_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("lvl_9").style.visibility="hidden";
		document.getElementById("lvl_9_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_9_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_10").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_9_skip()
{
		life--;
		document.getElementById("lvl_10").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_10_jwb()
{
	var text10 = "Demokrasi terpimpin";
	if (document.getElementById("text10").value==text10)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("lvl_10").style.visibility="hidden";
		document.getElementById("lvl_10_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("lvl_10").style.visibility="hidden";
		document.getElementById("lvl_10_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_10_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_11").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_10_skip()
{
		life--;
		document.getElementById("lvl_11").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_11_jwb()
{
	var text11 = "Muhammad hatta";
	if (document.getElementById("text11").value==text11)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("lvl_11").style.visibility="hidden";
		document.getElementById("lvl_11_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("lvl_11").style.visibility="hidden";
		document.getElementById("lvl_11_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_11_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_12").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_11_skip()
{
		life--;
		document.getElementById("lvl_12").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_12_jwb()
{
	var text12 = "liberal";
	if (document.getElementById("text12").value==text12)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("lvl_12").style.visibility="hidden";
		document.getElementById("lvl_12_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("lvl_12").style.visibility="hidden";
		document.getElementById("lvl_12_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_12_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_13").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_12_skip()
{
		life--;
		document.getElementById("lvl_13").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_13_jwb()
{
	var text13 = "soekarno";
	if (document.getElementById("text13").value==text13)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("lvl_13").style.visibility="hidden";
		document.getElementById("lvl_13_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("lvl_13").style.visibility="hidden";
		document.getElementById("lvl_13_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_13_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_14").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_13_skip()
{
		life--;
		document.getElementById("lvl_14").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_14_jwb()
{
	var text14 = "soekarno";
	if (document.getElementById("text14").value==text14)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("text14").style.visibility="hidden";
		document.getElementById("lvl_14").style.visibility="hidden";
		document.getElementById("lvl_14_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("text14").style.visibility="hidden";
		document.getElementById("lvl_14").style.visibility="hidden";
		document.getElementById("lvl_14_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_14_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("lvl_15").style.visibility="visible";
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_14_skip()
{
		life--;
		document.getElementById("lvl_15").style.visibility="visible";
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_15_jwb()
{
	var text15 = " proyek pertanian intensifikasi Irian Jaya";
	if (document.getElementById("text15").value==text15)
	{
		point++;
		document.getElementById("imageT").style.visibility="visible";
		document.getElementById("imageF").style.visibility="hidden";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("text14").style.visibility="hidden";
		document.getElementById("text15").style.visibility="hidden";
		document.getElementById("lvl_15").style.visibility="hidden";
		document.getElementById("lvl_15_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=+point;
	} 
	else
	{
		point--;
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="visible";
		document.getElementById("text").style.visibility="hidden";
		document.getElementById("text2").style.visibility="hidden";
		document.getElementById("text3").style.visibility="hidden";
		document.getElementById("text4").style.visibility="hidden";
		document.getElementById("text5").style.visibility="hidden";
		document.getElementById("text6").style.visibility="hidden";
		document.getElementById("text7").style.visibility="hidden";
		document.getElementById("text8").style.visibility="hidden";
		document.getElementById("text9").style.visibility="hidden";
		document.getElementById("text10").style.visibility="hidden";
		document.getElementById("text11").style.visibility="hidden";
		document.getElementById("text12").style.visibility="hidden";
		document.getElementById("text13").style.visibility="hidden";
		document.getElementById("text14").style.visibility="hidden";
		document.getElementById("text15").style.visibility="hidden";
		document.getElementById("lvl_15").style.visibility="hidden";
		document.getElementById("lvl_15_jwb").style.visibility="visible";
		document.getElementById("score").innerHTML=point;
	}
	document.getElementById("life").innerHTML=life;
}
function level_15_go()
{
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		alert("Finish")+window.location.assign("score.html")
	
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}
function level_15_skip()
{
		life--;
		alert("Finish")+window.location.assign("score.html")
		document.getElementById("imageT").style.visibility="hidden";
		document.getElementById("imageF").style.visibility="hidden";
		
		if (document.getElementById("life").innerHTML==5)
		{
			document.getElementById("mati5").style.visibility="visible";
			document.getElementById("idup5").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==4)
		{
			document.getElementById("mati4").style.visibility="visible";
			document.getElementById("idup4").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==3)
		{
			document.getElementById("mati3").style.visibility="visible";
			document.getElementById("idup3").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==2)
		{
			document.getElementById("mati2").style.visibility="visible";
			document.getElementById("idup2").style.visibility="hidden";
		}
		if (document.getElementById("life").innerHTML==1)
		{
			document.getElementById("mati1").style.visibility="visible";
			document.getElementById("idup1").style.visibility="hidden";
			alert("Lose")+window.location.assign("score.html")
		}
	document.getElementById("score").innerHTML=+point;
	document.getElementById("life").innerHTML=life;
}