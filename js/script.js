let botao = document.getElementById("calcular");

botao.addEventListener('click', function calculadora(event){
	event.preventDefault();
	
    let Nome=document.getElementById("nome");
    let Dependentes=document.getElementById("dependentes");
    let SalarioBruto =document.getElementById("s-bruto");

    let DescontoINSS=0;

    if (SalarioBruto.value <= 1100)
    {
       DescontoINSS = (SalarioBruto.value * 0.075).toFixed(2);
    }else if (SalarioBruto.value < 2203.49)
    {
        DescontoINSS = (SalarioBruto.value * 0.09).toFixed(2);
    }else if (SalarioBruto.value < 3305.23)
    {
       DescontoINSS = (SalarioBruto.value * 0.12).toFixed(2);
    }else
    {
        DescontoINSS = (SalarioBruto.value * 0.14).toFixed(2);
    }

    let baseCalculo = (SalarioBruto.value - DescontoINSS - (Dependentes.value*189.59));
    let DescontoIRRF;
    let AliquotaIRRF;
    let Deducao;

    if(baseCalculo<= 1903.98){
        AliquotaIRRF = 0;
        Deducao= 0;
    }else if (baseCalculo < 2826.66){
        AliquotaIRRF = (baseCalculo * 0.075).toFixed(2) ;
        Deducao = 142.80;
    }else if(baseCalculo < 3751.06){
       AliquotaIRRF = (baseCalculo*0.15).toFixed(2);
       Deducao = 354.80;
    }else if(baseCalculo< 4664.69){
        AliquotaIRRF = (baseCalculo*0.225).toFixed(2);
        Deducao = 636.13;
    }else{
        AliquotaIRRF= (baseCalculo*0.275).toFixed(2);
        Deducao = 869.36;
    }

    DescontoIRRF= AliquotaIRRF - Deducao
    let SalarioLiquido = (SalarioBruto.value - DescontoINSS - DescontoIRRF);

    function tabela(){
    let tabela = document.querySelector('table')
    let linhas = tabela.rows.length
    let linha = tabela.insertRow(linhas)

    let cellNome = linha.insertCell(0)
    let cellSBruto = linha.insertCell(1)
    let cellDep = linha.insertCell(2)
    let cellINSS = linha.insertCell(3)
    let cellIRRF = linha.insertCell(4)
    let cellSLiquido = linha.insertCell(5)

    cellNome.innerHTML = Nome.value
    cellSBruto.innerHTML = "R$ "+ SalarioBruto.value
    cellDep.innerHTML = Dependentes.value
    cellINSS.innerHTML = "R$ "+DescontoINSS
    cellIRRF.innerHTML = "R$ "+DescontoIRRF.toFixed(2) 
    cellSLiquido.innerHTML = "R$ "+SalarioLiquido.toFixed(2) 


    if(linhas %2 == 1){
       cellNome.style.background="#fff"
       cellNome.style.color="#002969"
       cellSBruto.style.background="#fff"
       cellSBruto.style.color="#002969"
       cellDep.style.background="#fff"
       cellDep.style.color="#002969"
       cellINSS.style.background="#fff"
       cellINSS.style.color="#002969"
       cellIRRF.style.background="#fff"
       cellIRRF.style.color="#002969"
       cellSLiquido.style.background="#fff"
       cellSLiquido.style.color="#002969"
   
   
    if (DescontoINSS!=0){
    tabela.style.display="flex"
    tabela.style.marginBottom="3vh"
    }
    }

    
   
    }

    tabela();
    
});