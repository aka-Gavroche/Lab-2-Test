         //інструкція з користування:
         console.log ("Right triangle solution calculator.");
         console.log ("Enter the two types of values and, in fact, their values for function triangle().");
         console.log ("Available value types: hypotenuse, leg, adjacent angle, opposite angle, angle (in pair with hypotenuse).");
         console.log ("Available pairs of types: hypotenuse and leg, hypotenuse and angle, leg and adjacent or opposite angle")
         console.log ("Example: triangle(5, 'leg', 10, 'hypotenuse')");
         console.log ("Entered types and values must be correct.")

        //оголошення "типів" 
        const leg = "leg";
        const hypotenuse = "hypotenuse";
        const adjacent = "adjacent angle";
        const opposite = "opposite angle";
        const angle = "angle";

        function triangle (valueOne, typeOne, valueTwo, typeTwo) {            
            let leg1_V;
            let leg2_V;
            let hypotenuse_V;
            let adjacent_V;
            let opposite_V;
            let angle_V;

            switch (typeOne) {
                case leg: 
                    leg1_V = valueOne;
                    break;
                case hypotenuse: 
                    hypotenuse_V = valueOne;
                    break;
                case adjacent: 
                    adjacent_V = valueOne;
                    break;
                case opposite: 
                    opposite_V = valueOne;
                    break;
                case angle: 
                    angle_V = valueOne;
                    break;
                default: 
                    console.log ("Wrong data types!");
                    console.log ("failed");
                    return;
            } 

            switch (typeTwo) {
                case leg: 
                    if (leg1_V) {
                        leg2_V = valueTwo
                    } else {
                        leg1_V = valueTwo; 
                    }
                    break;
                case hypotenuse: 
                    hypotenuse_V = valueTwo;
                    break;
                case adjacent: 
                    adjacent_V = valueTwo;
                    break;
                case opposite: 
                    opposite_V = valueTwo;
                    break;
                case angle: 
                    angle_V = valueTwo;
                    break;
                default: 
                    console.log ("Wrong data types!");
                    console.log ("failed");
                    return;
            }

            if (leg1_V || leg1_V == 0) {
                if (leg1_V>0) {
                    if (leg2_V || leg2_V == 0) {
                        if (leg2_V > 0) {
                            console.log("Result for two legs: ")
                            let a = leg1_V;
                            let b = leg2_V;
                            let c = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)),(1/2));
                            let sinAlpha = a/c;
                            let cosBeta = sinAlpha;
                            let Alpha = Math.asin(sinAlpha)*180/Math.PI;
                            let Beta = Math.acos(cosBeta)*180/Math.PI;

                            console.log("a = ", Math.round(a)); 
                            console.log("b = ", Math.round(b));
                            console.log("c = ", Math.round(c));
                            console.log("Alpha = ", Math.round(Alpha));
                            console.log("Beta = ", Math.round(Beta));
                            console.log("success");
                        } else {
                            console.log ("Wrong data value!");
                            console.log("failed");
                        }
                    } else if (hypotenuse_V || hypotenuse_V == 0) {
                        if (hypotenuse_V > 0 && hypotenuse_V>leg1_V) {
                            console.log("Result for leg and hypotenuse: ")
                            let a = leg1_V;
                            let c = hypotenuse_V;
                            let b = Math.pow(Math.pow (c, 2) - Math.pow (a, 2), (1/2));
                            let sinAlpha = a/c;
                            let cosBeta = sinAlpha;
                            let Alpha = Math.asin(sinAlpha)*180/Math.PI; // переводимо значення синуса в радіани, а їх у градуси
                            let Beta = Math.acos(cosBeta)*180/Math.PI;

                            console.log("a = ", a); 
                            console.log("b = ", b);
                            console.log("c = ", c);
                            console.log("Alpha = ", Math.round(Alpha));
                            console.log("Beta = ", Math.round(Beta));
                            console.log("success");
                            
                        } else {
                            console.log("Wrong data value!");
                            console.log("failed");
                        }
                    } else if (adjacent_V ||adjacent_V == 0) {
                        if (adjacent_V>0 && adjacent_V<90) {
                            console.log("Result for leg and adjacent angle: ");
                            let a = leg1_V;
                            let Beta = adjacent_V*Math.PI/180; // кут Бета у радіанах
                            let cosBeta = Math.cos(Beta); //знаходимо косинус Бета
                            let c = a/cosBeta;
                            let Alpha;
                            let sinAlpha = cosBeta;
                            Alpha = Math.asin(sinAlpha)*180/Math.PI; //кут Альфа у градусах
                            let tanAlpha = Math.tan (Alpha*Math.PI/180);
                            let b = a/tanAlpha;
                            Beta = Math.acos(cosBeta)*180/Math.PI;
                            
                            console.log("a = ", a);
                            console.log("b = ", b);
                            console.log("c = ", c);
                            console.log("Alpha = ", Math.round(Alpha));
                            console.log("Beta = ", Math.round(Beta));
                            console.log("success");
                        } else {
                            console.log("Wrong data value!");
                            console.log("failed");
                        }
                        
                    } else if (opposite_V || opposite_V == 0 ) {
                        if (opposite_V>0 && opposite_V<90) {
                            console.log("Result for leg and opposite angle:")
                            let a = leg1_V;
                            let Alpha = opposite_V*Math.PI/180; //кут Альфа у радіанах
                            let sinAlpha = Math.sin (Alpha); // знаходимо синус кута Альфа
                            let c = a/sinAlpha; //
                            let b = Math.pow ((Math.pow (c, 2) - Math.pow(a, 2)), (1/2));
                            let sinBeta = b/c;
                            Alpha = Math.asin(sinAlpha)*180/Math.PI;
                            let Beta = Math.asin(sinBeta)*180/Math.PI;

                            console.log("a = ", a);
                            console.log("b = ", b); 
                            console.log("c = ", c);
                            console.log("Alpha = ", Math.round(Alpha));
                            console.log("Beta = ", Math.round(Beta));
                            console.log("success");
                        } else {
                            console.log("Wrong data value!");
                            console.log("failed");
                        }
                    } else if (angle_V) {
                        if (angle_V>0 && angle_V<90) {
                            console.log("Wrong data types");
                            console.log("failed");
                            
                        } else {
                            console.log("Wrong data value!");
                            console.log("failed");
                        }
                    }
                } else {
                    console.log ("Wrong data value!");
                    console.log("failed");
                }
               
            } else if (hypotenuse_V || hypotenuse_V == 0) {
                    if (hypotenuse_V>0) {
                        if (angle_V || angle_V == 0) {
                            if (angle_V>0 && angle_V<90) {
                                console.log("Result for hypotenuse and angle:");
                                let c = hypotenuse_V;
                                let Alpha = angle_V;
                                let Beta = 90-Alpha;

                                let sinAlpha = Math.sin(Alpha*Math.PI/180);
                                let sinBeta = Math.sin(Beta*Math.PI/180);

                                let a = sinAlpha*c;
                                let b = sinBeta*c;

                                console.log("a = ", a);
                                console.log("b = ", b); 
                                console.log("c = ", c);
                                console.log("Alpha = ", Alpha);
                                console.log("Beta = ", Beta);
                            } else {
                                console.log("Wrong data value!");
                                console.log("failed");
                            }
                        } else {
                            console.log("Wrong data types!");
                            console.log("failed");
                        }
                    } else {
                        console.log("Wrong data value!");
                        console.log("failed");
                    }
            } else { 
                console.log ("Wrong data types!");
                console.log("failed");
            }
        }


       