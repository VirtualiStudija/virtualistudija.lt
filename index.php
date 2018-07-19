<!DOCTYPE html>
<html>
	<head>
		<!--META nustatymai-->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
		<script src="js/init.js"></script>
        <script>
//            window.location.href = "http://virtualistudija.lt/#/meniu"; 
            window.location.href = "http://localhost/new_virtualistudija/#/meniu"; 
        </script>
        
        
		<!--TAGS-->
		<title></title>
        <link rel="canonical" href="">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta content="" property="og:title">
        <meta content="" property="og:description">
        <meta content="" property="og:site_name">
        <meta content="" property="og:url">
        <meta content="" property="og:image">
		<!--Web Fonts-->
		<link href='http://fontsforweb.com/font/getcss?id=2502&apikey=f47cb6693cf95ae97de95fc35d79581b' rel='stylesheet' type='text/css'>
		<link href='http://fontsforweb.com/font/getcss?id=15962&apikey=f47cb6693cf95ae97de95fc35d79581b' rel='stylesheet' type='text/css'>
		<link href='http://fontsforweb.com/font/getcss?id=4410&apikey=f47cb6693cf95ae97de95fc35d79581b' rel='stylesheet' type='text/css'>
		<!--animate.js-->
		<link rel="stylesheet" href="css/animate.css">
		<!--Mano stiliai-->
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
  
	<body onload="init();" style="margin:0px;">
	    <div class="menu-wrap">
            <div class="menu-mobile-wrap">
               <iframe class="menu-mobile animated slideInDown" src="inc/menu-mobile/menu_mobile.html" frameborder="0"></iframe>
            </div>
        </div>
	    <iframe class="menu-long animated slideInDown" src="inc/long-menu/menu_long.html" frameborder="0"></iframe>
	
		<div id="impress">
		
			<div class="step" id="main" data-x="0" data-y="0"></div>
			
			<div class="step" id="meniu" data-x="0" data-y="0" data-scale="0.8">
			   <div class="anim-meniu" id="animation_container" style="background-color:rgba(255, 255, 255, 0); width:1366px; height:600px">
                    <canvas id="canvas" width="1366" height="600" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1);"></canvas>
                    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1366px; height:600px; position: absolute; left: 0px; top: 0px; display: block;">
                    </div>
                </div> 
			</div>
			
			<!--************************ SVETAINIŲ KŪRIMAS <!--************************-->
			
			<div class="step scrollable orient" id="svetainiu-kurimas" data-x="-450" data-y="-390" data-rotate="-90">
				<div class="box">
                    <div class="photo">
                            <img src="inc/photographer.png" alt="">
                    </div>
                    <div class="svet-kur pl">
                        <p>Funkcionali
                         
                        <a style="color: #FAAF3C" data-toggle="tooltip" data-placement="top" class="yellow-tooltip" title="Funkcionali internetinė svetainė – tai sprendimas verslui būti matomam internete. Svetainės svarba labai didelė, kadangi beveik kiekvienas šiandieninis žmogus ieško prekių ir paslaugų internete. Daug kam svetainių kūrimas atrodo paprastas darbas, tačiau jei Jūsų veikla orientuota į plėtrą, pardavimų didinimą, tiesiog gražios svetainės neužtenka, todėl rekomenduojame patikėti šį darbą specialistams. Naudodami inovacijas, Jums garantuosime svetainės saugumą, modernumą ir funkcionalumą.">internetinė svetainė</a>
                        
                        , tai svarbiausias sprendimas verslui, būti matomam interneto erdvėje. Siekiantiems parduoti savo produkciją internete, sukursime 
                        
                         <a style="color: #FAAF3C" data-toggle="tooltip" data-placement="top" class="yellow-tooltip" title="Sukursime parduotuvę, kartu su personalizuota turinio valdymo sistema, su galimybe integruoti sandėlio apskaitos sistemą. Jei jūsų veiklos mastelis ir biudžetas nėra didelis, panaudosime vieną iš jau esamų, populiarių turinio valdymo sistemų, integruosime visas įmanomas atsiskaitymo sistemas. Dizainą taip pat pritaikysime pasirinktinai, pagal jūsų veiklos sritį ir mastelį. Mūsų programavimo meistrai užtikrins svetainės duomenų saugumą bei saugų atsiskaitymą internetu.">internetinė parduotuvę</a>
                        
                         kartu su individualia 
                         
                        <a style="color: #FAAF3C" data-toggle="tooltip" data-placement="top" class="yellow-tooltip" title="Kuriame individualias, lengvai optimizuojamas (SEO) turinio valdymo sistemas, platformas, su reikalingų įrankių integracijomis. Mes pagalvojome, kad svetainės valdymas būtų paprastesnis, o įrankių integravimas sumažintų poreikį vienu kartu naršyti daug svetainių ir sutaupytų Jūsų laiką ir pinigus. Taip pat garantuojame sistemos saugumą, nemokamas konsultacijas ir pamokas naudojimo klausimais bei palaikymą.">turinio valdymo sistema</a>
                         
                         , o esant poreikiui integruosime ir individualią 
                         
                        <a style="color: #FAAF3C" data-toggle="tooltip" data-placement="top" class="yellow-tooltip" title="Individualios internetinės apskaitos sistemos, palengvins kasdieninį Jūsų įmonės darbą, automatizuojant darbuotojų laiko ir atlyginimo apskaitos procesus, o galbūt prekių sandėlyje ar pardavimų apskaitą. Mes garantuojame sistemos saugumą bei stabilumą. Reikalui esant suteiksime nemokamus naudojimo sistema apmokymus bei palaikymą.">apskaitos sistemą</a>
                         
                         . Mums svarbūs kiekvieno kliento poreikiai, todėl kuriame ir kitokio pobūdžio projektus, Pvz. 
                        
                        <a style="color: #FAAF3C" data-toggle="tooltip" data-placement="top" class="yellow-tooltip" title="Norite rašyti tinklaraštį, tačiau nesate dizaino ar svetainių kūrimo specialistas, o galbūt tiesiog trūksta žinių? Suteiksime nemokamą konsultaciją, patarsime kokią turinio valdymo sistemą (TVS) naudoti, o reikalui esant sukursime personalizuotą platformą, su tiktai reikalingomis funkcijomis, pagal Jūsų poreikius bei sukursime dizainą arba pritaikysime šabloną, priklausomai nuo biudžeto, pagal Jūsų tinklaraščio temą.">blog</a>
                          
                          svetaines.</p>
 
                    </div>
                    <div class="svet-kur paslauga"><h1 class="fontsforweb_MYRIADB">SVETAINIŲ KŪRIMAS</h1></div>
				</div>
				<div class="box str-margin">
                    <div class="klausimas">
                        <div class="str-y">
                            <h5>STRAIPSNIS</h5>
                        </div>
                        <div class="svet-kur str-kls">
                            <i><h4>Kodėl žmonės samdo profesionalus sukurti Jiems internetinę svetainę? Profesionalas prieš greitus ir mažai kainuojančius svetainių kūrimo įrankius</h4></i>
                        </div>
                    </div>
				</div>
			</div>

            <!--************************ MARKETINGAS <!--************************-->

			<div class="step scrollable orient" id="marketingas" data-x="700" data-y="250" data-scale="0.6">
                <div class="box">
                    <div class="photo">
                        <img src="inc/photographer.png" alt="">
                    </div>
                    <div class="market pl">
                        <p>Marketingo sprendimai neabejotinai svarbus verslo elementas, padedantis augti ypatingai jaunam verslui. Siekiantiems ilgalaikių, tačiau ne greitų rezultatų siūlome 
                        
                        <a style="color: #8CC541" data-toggle="tooltip" data-placement="top" class="green-tooltip" title="Svetainės optimizavimas – tai sudėtingas procesas, reikalaujantis nuolatinių interneto rinkos analizių bei tyrimų. Mūsų marketingo specialistai pasirūpins, Jūsų svetainės turinio optimizacija pagal Jūsų veiklos sritį, kad būtumėte matomi interneto paieškose kuo aukštesnėse pozicijose. Po projekto pabaigos, iki 90 dienų, suteiksime nemokamas konsultacijas dėl tolimesnių veiksmų arba už papildomą mokestį nuolat atliksime tyrimus bei pakeitimus, svetainės pozicijoms išlaikyti.">SEO paslaugų</a>
                        
                          paketą, į kurį įeina ir 
                        
                        <a style="color: #8CC541" data-toggle="tooltip" data-placement="top" class="green-tooltip" title="SEO – svetainės optimizavimas paieškos sistemoms, tai nėra pilnas sprendimas iki plačiai matomos svetainės internete. Svetainės platinimas internete – ne mažiau svarbi marketingo proceso dalis. Mūsų specialistai žino kur ir kaip platinti Jūsų interneto svetainę, pagal Jūsų veiklos sritį, todėl užtikrinsime aukštus realių klientų apsilankymo rezultatus. Projekto pabaigoje suteiksime nemokamą konsultaciją tolimesniems veiksmams, arba pagal pageidavimą už papildomą mokestį atliksime veiksmus patys.">svetainės platinimas</a>
                        
                        . 
                        
                        <a style="color: #8CC541" data-toggle="tooltip" data-placement="top" class="green-tooltip" title="SEO – svetainės optimizavimas paieškos sistemoms, tai nėra pilnas sprendimas iki plačiai matomos svetainės internete. Svetainės platinimas internete – ne mažiau svarbi marketingo proceso dalis. Mūsų specialistai žino kur ir kaip platinti Jūsų interneto svetainę, pagal Jūsų veiklos sritį, todėl užtikrinsime aukštus realių klientų apsilankymo rezultatus. Projekto pabaigoje suteiksime nemokamą konsultaciją tolimesniems veiksmams, arba pagal pageidavimą už papildomą mokestį atliksime veiksmus patys.">reklamos internete</a>
                        
                          paslaugos geriausiai tiks sezoniniam ar jaunam verslui, siekiant greito rezultato. Profesionalus 
                          
                        <a style="color: #8CC541" data-toggle="tooltip" data-placement="top" class="green-tooltip" title="Profesionalus turinio kūrimas – ko gero geriausia investicija į Jūsų veiklą. Rekomenduojame šį darbą patikėti specialistams, nes tinkamas optimizuoto turinio pateikimas, stipriai pagreitins Jūsų svetainės paplitimą internete bei patrauks tinkamos auditorijos dėmesį. Mes nuolat domimės interneto rinka įvairiose veiklos srityse, darome tyrimus bei analizes, todėl garantuojame turinio kokybę, bei turinį pilnai atitinkantį Jūsų veiklos sritį. Taip pat sukursime patrauklius paveikslėlius skelbimams, aukštos raiškos viršelius socialiniams tinklams.">turinio kūrimas</a>
                        
                        , jį optimizuojant pagal rinkos tyrimus, ko gero geriausia investicija į jūsų verslą.</p>     
                    </div>
                    <div class="market paslauga"><h1 class="fontsforweb_MYRIADB">MARKETINGAS</h1></div>
                </div>
			</div>

			<!--************************ DIZAINO DARBAI <!--************************-->

			<div class="step scrollable orient" id="dizaino-darbai" data-x="-400" data-z="95" data-y="350" data-rotate="30" data-rotate-x="-30">

				<div class="box">
                    <div class="photo">
                            <img src="inc/photographer.png" alt="">
                    </div>
                    <div class="diz-darb pl">
                        <p>Jeigu techninius svetainės kūrimo darbus organizuosite patys, siūlome 
                           
                        <a style="color: #C0282D" data-toggle="tooltip" data-placement="top" class="red-tooltip" title="Turite gerą programuotoją arba reikiamus įgūdžius svetainei sukurti, tačiau reikalingas geras svetainės dizainas? Mūsų dizaineriai patars ir sukurs išskirtinio autorinio, modernaus dizaino prototipą, apgalvojant vartotojo patirtį (UX) bei funkcionalumą.">web dizaino</a>
                           
                             paslaugą, svetainės prototipui sukurti. Labai svarbu, kad 
                             
                        <a style="color: #C0282D" data-toggle="tooltip" data-placement="top" class="red-tooltip" title="Vizitinė kortelė – labai svarbus šiuolaikinio verslo elementas, nes ji yra matoma Jūsų kliento, tada, kai labiausiai jam Jūsų prireikia. Mūsų profesionalūs dizaineriai, sukurs aukščiausios kokybės vizitinių dizainą, pritaikytą būtent jūsų veiklos sričiai.">vizitinės kortelės</a>
                           
                             dizaino kūrimo darbus patikėtumėte šios srities specialistams, nes jos primins apie jus klientams, kai jiems labiausiai reikės Jūsų paslaugų. 
                             
                        <a style="color: #C0282D" data-toggle="tooltip" data-placement="top" class="red-tooltip" title="Logotipas – svarbiausias marketingo elementas. Naudojamas, faktiškai visoje įmonės veikloje:  internete, ant dokumentų, produktų pakuočių, reklaminių stendų ir t.t. Labai svarbu, kad logotipas būtų šiuolaikiškas, neperkrautas ir atitiktų Jūsų veiklos sritį, tą mes ir siūlome.">logotipas</a>
                           
                             – svarbiausias marketingo elementas, nes naudosite jį visur, netgi ant dokumentų. 
                             
                        <a style="color: #C0282D" data-toggle="tooltip" data-placement="top" class="red-tooltip" title="Reklaminė spauda – reklaminiai stendai, skrajutės, skaitmeniniai reklaminiai paveikslėliai (SEO projekto dalis): soc. tinklų kanalų viršeliai, paveikslėliai skelbimų svetainėms. Mes kasdien analizuojame šiuolaikinę rinką, todėl žinome kas patraukia klientų dėmesį Jūsų veiklos srityje.">reklaminė spauda</a>
                           
                         – reklaminiai stendai, skaitmeniniai paveikslėliai ar viršeliai, pagerins Jūsų įvaizdį soc. tinkluose. Pagalvoję apie visus klientų poreikius,  sukūrėme ir 
                           
                        <a style="color: #C0282D" data-toggle="tooltip" data-placement="top" class="red-tooltip" title="Prireikė marškinėlių su užrašais ir paveikslėliais? Galbūt norite kūrybiško knygos viršelio? Sukursime bet kokį skaitmeninį sprendimą pagal Jūsų poreikius.">kitų dizaino</a> 
                           
                        paslaugų.</p>
                    </div>
                    <div class="diz-darb paslauga"><h1 class="fontsforweb_MYRIADB">DIZAINO DARBAI</h1></div>
				</div>
			</div>

			<!--************************ KITOS PASLAUGOS <!--************************-->

			<div class="step scrollable orient" id="kitos-paslaugos" data-x="600" data-y="-350" data-z="150" data-rotate-x="30" data-rotate="230" data-scale="0.8">
				<div class="box">
                    <div class="photo">
                            <img src="inc/photographer.png" alt="">
                    </div>
                    <div class="kitos-p pl">
                        <p>Taupykite laiką ir finansus, užimdami savo darbuotojus tik įmonės veikla, patikėdami 
                           
                        <a style="color: #2CA9E1" data-toggle="tooltip" data-placement="top" class="blue-tooltip" title="Taupydami laiką ir įmonės finansus, patikėkite svetainės administravimo darbus mums. Mokėsite tiktai už tai, kiek darbo bus atlikta ir galėsite koncentruotis tik į savo veiklą.">svetainės administravimą</a>
                           
                             mums. Norint geresnės svetainės, ne visada ją reikia perkurti nuo pagrindų, todėl siūlome 
                        
                        <a style="color: #2CA9E1" data-toggle="tooltip" data-placement="top" class="blue-tooltip" title="Ne visada būtina perkurti svetainę. Jei turite pilnai veikiančią svetainę, nesunkiai ją atnaujinsime bei modernizuosime, integruosime naujų funkcijų, kadangi jau turite pagrindą. Tai užims mažiau laiko.">svetainių atnaujinimo</a>
                           
                             paslaugą, o esant poreikiui 
                             
                        <a style="color: #2CA9E1" data-toggle="tooltip" data-placement="top" class="blue-tooltip" title="Integruojame, bet kokias funkcijas. Galbūt Jums reikia svetainėje Jūsų YouTube kanalo ar Google įrankių verslo platformoje? Mūsų patyrę programuotojai pasirūpins, kad turėtumėte viską vienoje vietoje.">įdiegsime naujas funkcijas</a>
                           .</p>
                    </div>
                    <div class="kitos-p paslauga"><h1 class="fontsforweb_MYRIADB">KITOS PASLAUGOS</h1></div>
				</div>
            </div>
		</div>
    
        <div class="contact-us">
            <div class="icon">
                <img src="inc/contactus.svg" alt="">
            </div>
                <div class="form">
                   <div class="patvirtinimas">
                       <?php include 'inc/patvirtinimas.php'; ?>
                        <p>Žinutė buvo išsiųsta sėkmingai!<br> Netrukus su jumis susisieksim.</p>
                   </div>
                    
                    <form id="contact-us" class="forma1" method="post">
                        <input type="text" id="vardas" name="vardas" placeholder="Vardas" class="fontsforweb_MYRIADB">
                        <input type="email" id="email" name="email" placeholder="El. Paštas" class="fontsforweb_MYRIADB">
                        <textarea name="zinute" id="zinute" placeholder="Žinutė" class="fontsforweb_MYRIADB"></textarea >
                        <input type="submit" id="submit" value="Siųsti" name="submit" class="fontsforweb_MYRIADB">
                    </form>
                </div>
        </div>
	    
	    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/actions.js"></script>
		<script type="text/javascript" src="js/menu.js"></script>
		<script src="js/impress.js"></script>
		<script>
			impress().init();
		</script>
	</body>
</html>