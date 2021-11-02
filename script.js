// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

                let head = [5, 25, 89, 120, 36]

                console.log();

                head.push('javascript', 'python');
                console.log(head);

                console.log();

                head.unshift('html', 'css');
                console.log(head);

                console.log();

                console.log(head.length);

                console.log();

                head.shift();
                head.pop();
                console.log(head);

                console.log();

                head.shift();
                head.splice(0,6, 'Ole On The Wheel', 'You', 'Will', 'Never', 'Walk', 'Alone');
                console.log(head);

                console.log();

                let newHead = head.slice(1,6);
                console.log(newHead);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;


            let fruit = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
            console.log();
            console.log(fruit.length);

            console.log();

            fruit.push('ვაშლი', 'ანანასი');
            console.log(fruit);

            console.log();

            fruit.unshift('საზამთრო');
            console.log(fruit);

            console.log();

            console.log(fruit.length);

            console.log();

            fruit.splice(3,0, 'მანგო');
            console.log(fruit);

            console.log();

            fruit.shift();
            fruit.pop();
            console.log(fruit);

            console.log();

            console.log(fruit.length);

// 3. მოცემულია მასივი: let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

            let array001 = [12, 25, 3, 6, 8, 14, 7, 23];
            console.log();
            let itBe = array001.map( toBe => toBe / 3);
            console.log(itBe);


// 4.  მოცემულია მასივი: let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

            let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
            console.log();
            let newLet = array.filter( numbers => typeof numbers === 'number');
            
            console.log(newLet);

// 5.მოცემულია მასივი: let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

            let languages = ['html', 'css', 'javascript', 'python', 'php'];
            console.log();
            let itCode = languages.filter( forFun => forFun.length > 3);

            console.log(itCode);


// 6.მოცემულია მასივი: let array= ['academy', 'of', 'digital', 'industries']
// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

            console.log();
            let itStepAcademy = ['academy', 'of', 'digital', 'industries'].reduce( (t,m) => t + ' ' + m);
            console.log(itStepAcademy);
            

// 7. მოცემულია მასივი: let item = [12, ‘google’, 32, null, ‘yahoo’, 25];
//  შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
// თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

            console.log();
            let item = [12, 'google', 32, null, 'yahoo', 25];
            let itSnow = item.map( snow => {
                if (typeof snow === 'number'){
                    return snow * snow;
                } else if (typeof snow === 'string' ) {
                    return snow.toLocaleUpperCase();
                } else {
                    return snow
                }
            });

            console.log(itSnow);
            console.log();



// 8. Მოცემულია მასივი: let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
            
            let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
            let itWin = words.filter( justM => justM.includes ('M') || justM.includes('m'));

            console.log(itWin);