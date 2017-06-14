var datas = document.getElementsByClassName('vs');
var elems = document.getElementsByClassName('multi_cont');
var opts = document.getElementsByClassName('opt_t');
var eigens = document.getElementsByClassName('eigen_t');
var artis = document.getElementsByClassName('arti');
var res = document.getElementsByClassName('re');


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
            elems[i].style.display = 'block';
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

    function cont1230() {
        fun7 = !fun7;
        if(fun7) {
            for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'inline-block';
                    }
                } 
            }    

var fun8 = false;

    function art() {
        fun8 = !fun8;
        if(fun8) {
            for (var i=0;i<artis.length;i+=1){
            artis[i].style.visibility = 'visible'; }
            document.getElementById('artificial').style.visibility = 'hidden';
            document.getElementById('real').style.display = 'none';
        } else {
            for (var i=0;i<artis.length;i+=1){
            artis[i].style.visibility = 'hidden'; }
        }
    } 


var fun9 = false;

    function real() {
        fun9 = !fun9;
        if(fun9) {
            for (var i=0;i<res.length;i+=1){
            res[i].style.visibility = 'visible'; }
            document.getElementById('real').style.visibility = 'hidden';
            document.getElementById('art').style.display = 'none';
        } else {
            for (var i=0;i<res.length;i+=1){
            res[i].style.visibility = 'hidden'; }
        }
    } 
    

var fun10 = false;

    function onedim() {
        fun10 = !fun10;
        if(fun10) {
            document.getElementById('circle_1D').style.visibility='visible';
            document.getElementById('cl_1D').style.visibility='visible';
            document.getElementById('mickey_1D').style.visibility='visible';
            document.getElementById('one_d').style.display = 'none';
        } else {
            document.getElementById('one_d').style.display = 'none';
        }
    } 


    var fun11 = false;

    function twodim() {
        fun11 = !fun11;
        if(fun11) {
            document.getElementById('cl_2D').style.visibility='visible';
            document.getElementById('swiss_2D').style.visibility='visible';
            document.getElementById('two_d').style.display = 'none';
        } else {
            document.getElementById('two_d').style.display = 'none';
        }
    } 


