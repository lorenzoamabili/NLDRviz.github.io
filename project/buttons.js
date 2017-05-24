var datas = document.getElementsByClassName('vs');
var tap = document.getElementsByClassName('data3');
var elems = document.getElementsByClassName('multi_cont');
var opts = document.getElementsByClassName('opt_t');
var eigens = document.getElementsByClassName('eigen_t');
var artis = document.getElementsByClassName('arti');
var res = document.getElementsByClassName('re');
var d2to1 = document.getElementsByClassName('oneD');
var d3to2 = document.getElementsByClassName('twoD');



var fun1 = false;
    function data_set() {
        fun1 = !fun1;
        if(fun1) {
            for (var i=0;i<datas.length;i+=1){
            datas[i].style.visibility = 'visible'; }
            document.getElementById('data_set').style.display = 'none';
        } else {
            for (var i=0;i<datas.length;i+=1){
            datas[i].style.display = 'none'; }
        }
    } 

var fun2 = false;

    function tech() {
        fun2 = !fun2;
        if(fun2) {
            document.getElementById('iter_b').style.visibility='visible';
            document.getElementById('eig_b').style.visibility='visible';
            document.getElementById('tech').style.display = 'none';
        } else {
            document.getElementById('tech').style.display = 'none';
        }
    } 


var fun3 = false;

    function eig() {
        fun3 = !fun3;
        if(fun3) {
            for (var i=0;i<eigens.length;i+=1){
            eigens[i].style.visibility = 'visible'; }
            document.getElementById('iter_b').style.display = 'none';
            document.getElementById('eig_b').style.display = 'none';
        }
    } 

var fun4 = false;

    function iter() {
        fun4 = !fun4;
        if(fun4) {
            for (var i=0;i<opts.length;i+=1){
            opts[i].style.visibility = 'visible'; }
            document.getElementById('iter_b').style.display = 'none';
            document.getElementById('eig_b').style.display = 'none';
        }
    }

var fun5 = false;

    function cont123() {
        fun5 = !fun5;
        if(fun5) {
            for (var i=0;i<elems.length;i+=1){
                elems[i].style.display='inline-block';
                    }
                } 
            }

var fun6 = false;

    function cont() {
        fun6 = !fun6;
        if(fun6) {
            document.getElementById('Container').style.display ='block';
        }
    }       

var fun7 = false;

    function iono() {
        fun7 = !fun7;
        if(fun7) {
            document.getElementById('iono_iter').style.visibility='visible';
            document.getElementById('iono_eig').style.visibility='visible';
            document.getElementById('iono_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
        } else {
            document.getElementById('iono_iter').style.display = 'none';
            document.getElementById('iono_eig').style.display = 'none';
            document.getElementById('iono_iter_video').style.display = 'none';
        }
    } 

var fun8 = false;

    function churn() {
        fun8 = !fun8;
        if(fun8) {
            document.getElementById('churn_iter').style.visibility='visible';
            document.getElementById('churn_eig').style.visibility='visible';
            document.getElementById('churn_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
                    } else {
            document.getElementById('churn_iter').style.display = 'none';
            document.getElementById('churn_eig').style.display = 'none';
            document.getElementById('churn_iter_video').style.display = 'none';
        }
    } 


var fun9 = false;

    function seme() {
        fun9 = !fun9;
        if(fun9) {
            document.getElementById('seme_iter').style.visibility='visible';
            document.getElementById('seme_eig').style.visibility='visible';
            document.getElementById('seme_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.visibility = 'hidden'; }
                    } else {
            document.getElementById('seme_iter').style.display = 'none';
            document.getElementById('seme_eig').style.display = 'none';
            document.getElementById('seme_iter_video').style.display = 'none';
        }
    }     

var fun10 = false;

    function art() {
        fun10 = !fun10;
        if(fun10) {
            for (var i=0;i<artis.length;i+=1){
            artis[i].style.visibility = 'visible'; }
            document.getElementById('artificial').style.visibility = 'hidden';
            document.getElementById('real').style.display = 'none';
        } else {
            for (var i=0;i<artis.length;i+=1){
            artis[i].style.visibility = 'hidden'; }
        }
    } 


var fun11 = false;

    function real() {
        fun11 = !fun11;
        if(fun11) {
            for (var i=0;i<res.length;i+=1){
            res[i].style.visibility = 'visible'; }
            document.getElementById('real').style.visibility = 'hidden';
            document.getElementById('art').style.display = 'none';
        } else {
            for (var i=0;i<res.length;i+=1){
            res[i].style.visibility = 'hidden'; }
        }
    } 

var fun12 = false;    

    function cl() {
        fun12 = !fun12;
        if(fun12) {
            document.getElementById('cl_iter').style.visibility='visible';
            document.getElementById('cl_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none';}
        } else {
            document.getElementById('cl_iter').style.display = 'none';;
            document.getElementById('cl_iter_video').style.display = 'none';;
        }
    } 

var fun13 = false;

    function nocl() {
        fun13 = !fun13;
        if(fun13) {
            document.getElementById('nocl_iter').style.visibility='visible';
            document.getElementById('nocl_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
                    } else {
            document.getElementById('nocl_iter').style.display = 'none';;
            document.getElementById('nocl_iter_video').style.display = 'none';;
        }
    } 


var fun14 = false;

    function swiss() {
        fun14 = !fun14;
        if(fun14) {
            document.getElementById('swiss_iter').style.visibility='visible';
            document.getElementById('swiss_eig').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
                    } else {
            document.getElementById('swiss_iter').style.display = 'none';
            document.getElementById('swiss_eig').style.display = 'none';
        }
    }


var fun15 = false;

    function mush() {
        fun15 = !fun15;
        if(fun15) {
            document.getElementById('mush_iter').style.visibility='visible';
            document.getElementById('mush_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
                    } else {
            document.getElementById('mush_iter').style.display = 'none';
            document.getElementById('mush_iter_video').style.display = 'none';
        }
    } 


var fun16 = false;

    function breast() {
        fun16 = !fun16;
        if(fun16) {
            document.getElementById('breast_iter').style.visibility='visible';
            document.getElementById('breast_iter_video').style.visibility='visible';
            for (var i=0;i<tap.length;i+=1){
            tap[i].style.display = 'none'; }
                    } else {
            document.getElementById('breast_iter').style.display = 'none';
            document.getElementById('breast_iter_video').style.display = 'none';
        }
    }       


var fun17 = false;

    function onedim() {
        fun17 = !fun17;
        if(fun17) {
            document.getElementById('circle_1D').style.visibility='visible';
            document.getElementById('cl_1D').style.visibility='visible';
            document.getElementById('mickey_1D').style.visibility='visible';
            document.getElementById('one_d').style.display = 'none';
        } else {
            document.getElementById('one_d').style.display = 'none';
        }
    } 

var fun18 = false;

    function cl1D() {
        fun18 = !fun18;
        if(fun18) {
            document.getElementById('cl_iter_1D').style.visibility='visible';
            document.getElementById('cl_eig_1D').style.visibility='visible';
            for (var i=0;i<d2to1.length;i+=1){
            d2to1[i].style.display = 'none';}
                    } else {
            document.getElementById('cl_iter_1D').style.display = 'none';
            document.getElementById('cl_eig_1D').style.display = 'none';
        }
    }


var fun19 = false;

    function mickey1D() {
        fun19 = !fun19;
        if(fun19) {
            document.getElementById('mickey_iter_1D').style.visibility='visible';
            document.getElementById('mickey_eig_1D').style.visibility='visible';
            for (var i=0;i<d2to1.length;i+=1){
            d2to1[i].style.display = 'none';}
                    } else {
            document.getElementById('mickey_iter_1D').style.display = 'none';
            document.getElementById('mickey_eig_1D').style.display = 'none';
        }
    } 


var fun20 = false;

    function circle1D() {
        fun20 = !fun20;
        if(fun20) {
            document.getElementById('circle_iter_1D').style.visibility='visible';
            document.getElementById('circle_eig_1D').style.visibility='visible';
            for (var i=0;i<d2to1.length;i+=1){
            d2to1[i].style.display = 'none'; }
                    } else {
            document.getElementById('circle_iter_1D').style.display = 'none';
            document.getElementById('circle_eig_1D').style.display = 'none';
        }
    } 

    var fun21 = false;

    function twodim() {
        fun21 = !fun21;
        if(fun21) {
            document.getElementById('cl_2D').style.visibility='visible';
            document.getElementById('swiss_2D').style.visibility='visible';
            document.getElementById('two_d').style.display = 'none';
        } else {
            document.getElementById('two_d').style.display = 'none';
        }
    } 

/*function download1()
{
    var what = document.getElementById('Container');
    var svgg = what.getElementsByTagName('svg')[0];
    var svg_xml = (new XMLSerializer).serializeToString(svgg);
    var form = document.getElementById('svg.form');
    form['pdf'].value = pdf;
    form['data'].value = svg_xml;
    form.submit;
}

function download2()
{
    var what1 = document.getElementById('Container1');
    var what2 = document.getElementById('Container2');
    var what3 = document.getElementById('Container3');
    var what = ['what1','what2','what3'];
    var svgg = what.getElementsByTagName('svg')[0];
    var svg_xml = (new XMLSerializer).serializeToString(svgg);
    var form = document.getElementById('svg.form');
    form['pdf'].value = pdf;
    form['data'].value = svg_xml;
    form.submit;
} 


// get svg element.
var svgg = document.getElementById('svg');

//get svg source.
var serializer = new XMLSerializer();
var source = serializer.serializeToString(svgg);

//add name spaces.
if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}
if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
}

//add xml declaration
source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

//convert svg source to URI data scheme.
var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

//set url value to a element's href attribute.
document.getElementById("link").href = url;
//you can download svg file by right click menu.




// get svg element.
var what2 = document.getElementsByTagName('multi_cont');
var svgg2 = what2.getElementsByTagName('svg')[0];

//get svg source.
var serializer2 = new XMLSerializer();
var source2 = serializer2.serializeToString(svgg2);

//add name spaces.
if(!source2.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
    source2 = source2.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}
if(!source2.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
    source2 = source2.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
}

//add xml declaration
source2 = '<?xml version="1.0" standalone="no"?>\r\n' + source2;

//convert svg source to URI data scheme.
var url2 = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source2);

//set url value to a element's href attribute.
document.getElementById("link").href = url2;
//you can download svg file by right click menu. 



function download1()
{
    var what = document.getElementById('Container');
  var config = {
    filename: 'customFileName',
  }
    d3_save_svg.save(what.select('svg').node(), config);
}


function download2()
{
var what2 = document.getElementsByTagName('multi_cont');
  var config2 = {
    filename: 'customFileName',
  }
d3_save_svg.save(what2.select('svg').node(), config2);
} 

<button id="down1" onClick="download1()">Download1</button> <button id="down2" onClick="download2()">Download2</button><br />
<br /> */