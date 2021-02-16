class Shop{
    constructor(){
        
    }
    display(){
        var button1 = createButton("Buy")
        button1.position(50,windowHeight-50)
        fill("green")
        textSize(20)
        text("$50 -- +1 MPC",button1.x-40,button1.y-40)
        button1.mousePressed(()=>{
            if(money>=50){
                moneyPerClick = moneyPerClick+1
                money = money-50
            }
        })
        var button2 = createButton("Buy");
        button2.position(250,windowHeight-50)
         fill("blue")
         textSize(20);
         text("$1000 -- +25 MPS",button2.x-50,button2.y-40);   
         button2.mousePressed(()=>{
             if(money>=1000){
                 moneyPerSecond = moneyPerSecond + 5;
                 money = money - 1000;
             }
         })
        var button3 = createButton("Buy")  
        button3.position(510,windowHeight-50);
        fill("red")
        textSize(20);
        text("50000 -- +1500 MPS",button3.x-50,button3.y-40)
        button3.mousePressed(()=>{
            if(money>=50000){
                moneyPerSecond = moneyPerSecond + 300
                money = money - 50000
            }
        })
        var button4 = createButton("Buy");
        button4.position(745,windowHeight-50);
            fill("yellow")
            textSize(20);
            text("2M -- + 70000 MPS",button4.x-60,button4.y-40);
            button4.mousePressed(()=>{
                if(money>=2000000){
                    moneyPerSecond = moneyPerSecond + 14000
                    money = money - 2000000
                }
            })
            var button5 = createButton("Buy");
            button5.position(950,windowHeight-50);
                fill("pink")
                textSize(20);
                text("50M -- + 2M MPS",button5.x-50,button5.y-40);
                button5.mousePressed(()=>{
                    if(money>=50000000){
                        moneyPerSecond = moneyPerSecond + 400000
                        money = money - 50000000
                }
            })
            var button6 = createButton("Buy");
            button6.position(1175,windowHeight-50);
                fill("gray")
                textSize(20);
                text("1B -- + 25M MPS",button6.x-50,button6.y-40);
                button6.mousePressed(()=>{
                    if(money>=B){
                        moneyPerSecond = moneyPerSecond + M*5
                        money = money - B
                }
            })

    }
}