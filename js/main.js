if (window.addEventListener) window.addEventListener('load', onLoad, false);
var ServicesAnimationComplete, GetInTouchAnimationComplete, GeniusAnimationPlayed, TypewriterAnimationComplete, BulbsSVG, bs, BulbsSVGContent, ArrayOfBulbs, animateIn, animatingBulbs = false;
var TypewriterSVG, ps, clickHere, Paper;
var currentWaypoint = "#home" || currentWaypoint;
var mobile = false;
var keyPress;
var playedOnce = false;
var AffairFormVisible = false;
var AffairFormUnlocked = false;
var TalentFormVisible = false;
var TalentFormUnlocked = false;
var noError = false;
var lastError = "Unknown Error";
var uploadFileSelected = false;
var Bulb1, Bulb2, Bulb3, Bulb4, Bulb5, Bulb6, Bulb7, Bulb8;
var Bulb1Light, Bulb2Light, Bulb3Light, Bulb4Light, Bulb5Light, Bulb6Light, Bulb7Light, Bulb8Light;
var backendFormSubmitPath = "backend/submitForm.php";
var backendFormSubmitPathDummy = "backend/submitFormDummy.php";
var toastTimeline = new TimelineMax();

function isMobile() {
    return mobile;
}

function turnOffLights() {
    var ArrayOfLights = [Bulb1Light, Bulb2Light, Bulb3Light, Bulb4Light, Bulb5Light, Bulb6Light, Bulb7Light, Bulb8Light];
    var go = true
    if (Bulb1Light == undefined) go = false
    if (go) {
        var tl = new TimelineMax();
        tl.to(Bulb1Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb2Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb3Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb4Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb5Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb6Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb7Light, 0.1, {
            opacity: 0
        })
        tl.to(Bulb8Light, 0.1, {
            opacity: 0
        })
    }
}

function onLoad() {
    var home = $('#home')[0];
    if (window.innerHeight > window.innerWidth) {
        mobile = true;
        console.log("This is mobile.");
        viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }
    else {
        mobile = false;
        console.log("This is desktop.");
    }
    ServicesAnimationComplete = false;
    GetInTouchAnimationComplete = false;
    GeniusAnimationPlayed = false;
    TypewriterAnimationComplete = false;
    BulbsSVG = document.getElementById("BulbsSVG");
    bs = BulbsSVG.contentDocument;
    BulbsSVGContent = bs.getElementById("content")
    TweenMax.set(BulbsSVGContent, {
        opacity: 0
    })
    TypewriterSVG = document.getElementById("TypewriterSVG");
    ps = TypewriterSVG.contentDocument;
    clickHere = ps.getElementById("clickHere")
    Paper = ps.getElementById("Paper")
    TweenMax.set(clickHere, {
        opacity: 0
    })
    TweenMax.set(Paper, {
        opacity: 0
    })
    animateFront_M();
    animateFront();
    animateDesk();
    animateTalent();
    animateMagneticEffect();
    setupWaypoints();
    updateNavigation();
    formActions();
    setupBubbles();
    var all = document.getElementsByTagName("*");
    var maxWidth = 0;
    for (var i = 0, max = all.length; i < max; i++) {
        if (all[i].clientWidth > maxWidth && all[i].clientWidth != undefined) {
            maxWidth = all[i].clientWidth;
            //console.log("MaxWidth : ", all[i].clientWidth)
            //console.log("ELEMENT WAS : ", all[i])
        }
    }
}

function animateFront() {
    var frontSVG = document.getElementById("FrontSVG");
    var fs = frontSVG.contentDocument;
    if (fs !== null) {
        TweenLite.ticker.fps(60);
        TweenMax.ticker.fps(60);
        var UNPath = fs.getElementById("UNPath")
        var YellowRoadPath = fs.getElementById("YellowRoadPath");
        var YellowRoad2Path = fs.getElementById("YellowRoad2Path");
        var BlueRoadPath = fs.getElementById("BlueRoadPath");
        var JPath = fs.getElementById("JPath")
        var SPath = fs.getElementById("SPath")
        var WPath = fs.getElementById("WPath")
        var Page = fs.getElementById("Page")
        var Text0 = fs.getElementById("Text0")
        var Text1 = fs.getElementById("Text1")
        var Plane = fs.getElementById("Plane")
        var PlaneLineSmall = fs.getElementById("PlaneLineSmall")
        var PlaneLineBig = fs.getElementById("PlaneLineBig")
        var ZPath = fs.getElementById("ZPath")
        var BulbMiniGlow = fs.getElementById("BulbMiniGlow")
        var IdeaGlow = fs.getElementById("IdeaGlow")
        var BigBulbIllumination = fs.getElementById("BigBulbIllumination")
        var BulbFlicker = fs.getElementById("BulbFlicker")
        var EnlargedImage = fs.getElementById("EnlargedImage")
        var MagniGlass = fs.getElementById("MagniGlass")
        var ChatDot1 = fs.getElementById("ChatDot1")
        var ChatDot2 = fs.getElementById("ChatDot2")
        var ChatDot3 = fs.getElementById("ChatDot3")
        var Bubble1 = fs.getElementById("Bubble1")
        var Bubble2 = fs.getElementById("Bubble2")
        var Bubble3 = fs.getElementById("Bubble3")
        var Bubble4 = fs.getElementById("Bubble4")
        var Bubble5 = fs.getElementById("Bubble5")
        var Bubble6 = fs.getElementById("Bubble6")
        var Bubble7 = fs.getElementById("Bubble7")
        var Bubble8 = fs.getElementById("Bubble8")
            /*** SKY ***/
        var SunCenter = fs.getElementById("SunCenter")
        var SunShine = fs.getElementById("SunShine")
        var Balloon = fs.getElementById("Balloon")
        var Cloud1 = fs.getElementById("Cloud1")
        var Cloud2 = fs.getElementById("Cloud2")
        var Cloud3 = fs.getElementById("Cloud3")
        var Cloud4 = fs.getElementById("Cloud4")
        var Cloud5 = fs.getElementById("Cloud5")
        var Cloud6 = fs.getElementById("Cloud6")
        var PaintColorX = fs.getElementById("PaintColorX")
        var PaintColorState1 = fs.getElementById("PaintColorState1")
        var PaintColorStateX2 = fs.getElementById("PaintColorStateX2")
        var PaintFill = fs.getElementById("PaintFill")
        var TubeLiquid = fs.getElementById("TubeLiquid")
        var TubeLiquidState2 = fs.getElementById("TubeLiquidState2")
        var CheckBox1 = fs.getElementById("CheckBox1")
        var CheckBox2 = fs.getElementById("CheckBox2")
        var CheckBox3 = fs.getElementById("CheckBox3")
        var FullCheckBox1 = fs.getElementById("FullCheckBox1")
        var FullCheckBox2 = fs.getElementById("FullCheckBox2")
        var FullCheckBox3 = fs.getElementById("FullCheckBox3")
        var CheckTick1 = fs.getElementById("CheckTick1")
        var CheckTick2 = fs.getElementById("CheckTick2")
        var CheckTick3 = fs.getElementById("CheckTick3")
        var CheckBoxEmpty = fs.getElementById("CheckBoxEmpty")
        var CheckList = new TimelineMax({
            repeat: -1
            , delay: 1
        });
        CheckList.set(CheckTick1, {
            opacity: 0
        })
        CheckList.set(CheckTick2, {
            opacity: 0
        })
        CheckList.set(CheckTick3, {
            opacity: 0
        })
        CheckList.to(FullCheckBox1, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick1, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(FullCheckBox2, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick2, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(FullCheckBox3, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick3, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(CheckTick1, 1, {
            opacity: 0
        })
        CheckList.to(FullCheckBox1, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(FullCheckBox2, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(FullCheckBox3, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(CheckTick2, 1, {
            opacity: 0
        }, "-=1")
        CheckList.to(CheckTick3, 1, {
            opacity: 0
        }, "-=1")
        TweenMax.set(PaintFill, {
            scaleY: 0
        })
        var PaintFillAnim = new TimelineMax({
            repeat: -1
        })
        PaintFillAnim.to(PaintFill, 3, {
            scaleY: 1
        })
        PaintFillAnim.to(PaintFill, 1, {
            opacity: 0
        })
        var TubeAnim = new TimelineMax({
            repeat: -1
        })
        TubeAnim.to(TubeLiquid, 1, {
            morphSVG: TubeLiquidState2
            , ease: Linear.easeNone
        })
        TubeAnim.to(TubeLiquid, 1, {
            morphSVG: TubeLiquid
            , ease: Linear.easeNone
                //, ease: Linear.easeNone
        });
        var PrinterAnim = new TimelineMax({
            repeat: -1
        })
        TweenMax.set(Text1, {
            opacity: 0
        })
        TweenMax.set(Text0, {
            opacity: 0
        })
        PrinterAnim.from(Page, 1, {
            opacity: 0
        })
        PrinterAnim.to(Page, 4, {
            y: "30"
            , ease: Linear.easeNone
        })
        PrinterAnim.to(Text1, 1, {
            opacity: 1
        }, "-=1.5")
        PrinterAnim.to(Text0, 1, {
            opacity: 1
        }, "-=1.5")
        PrinterAnim.to(Page, 1, {})
        PrinterAnim.to(Page, 0.5, {
            opacity: 0
        })
        var Heart = fs.getElementById("Heart");
        var BigBulbIllumination = fs.getElementById("BigBulbIllumination");
        animateBubbles();
        animateClouds();
        TweenMax.from(YellowRoadPath, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        TweenMax.from(YellowRoad2Path, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        TweenMax.from(BlueRoadPath, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        var BigBulbAnim = new TimelineMax({
            repeat: -1
        })
        BigBulbAnim.to(BulbFlicker, 0.5, {
            opacity: 1
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BulbFlicker, 0.2, {
            opacity: 0
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BulbFlicker, 0.5, {
            opacity: 1
            , blur: '100%'
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BigBulbIllumination, 0.5, {
            opacity: 1
            , blur: '8%'
            , ease: Linear.easeNone
        }, "-=1")
        BigBulbAnim.to(BulbFlicker, 0.2, {
            opacity: 0
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BigBulbIllumination, 1.4, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        BigBulbAnim.to(BigBulbIllumination, 0.7, {
            opacity: 0
            , ease: Linear.easeNone
        })
        TweenMax.set(IdeaGlow, {
            opacity: 0
            , scale: 0
        })
        var BulbAnim = new TimelineMax({
            repeat: 1
        })
        BulbAnim.from(BulbMiniGlow, 0.1, {
            opacity: 1
        })
        BulbAnim.to(BulbMiniGlow, 0.1, {
            opacity: 0
        })
        BulbAnim.to(IdeaGlow, 0.1, {
            opacity: 1
            , scale: 1
        })
        BulbAnim.to(IdeaGlow, 0.2, {
            opacity: 0
            , scale: 0
        })
        BulbAnim.to(IdeaGlow, 0.1, {
            opacity: 1
            , scale: 1
        })
        BulbAnim.from(BulbMiniGlow, 0.1, {
            opacity: 1
        })
        var PlaneAppear = new TimelineMax({
            repeat: -1
        });
        PlaneAppear.from(PlaneLineBig, 2, {
            drawSVG: '100% 100%'
            , x: '-10'
            , y: '10'
        })
        PlaneAppear.from(PlaneLineSmall, 2, {
            drawSVG: '100% 100%'
            , x: '-10'
            , y: '10'
        }, "-=2")
        PlaneAppear.from(Plane, 2, {
            x: "-10"
            , y: "10"
        }, "-=2")
        PlaneAppear.set({}, {}, 1);
        PlaneAppear.to(PlaneLineBig, 1, {
            drawSVG: '100% 100%'
            , opacity: 0
        })
        PlaneAppear.to(PlaneLineSmall, 1, {
            drawSVG: '100% 100%'
            , opacity: 0
        }, "-=1")
        PlaneAppear.set({}, {}, 1)
        PlaneAppear.to(Plane, 1.5, {
            opacity: 0
            , x: "10"
            , y: "-10"
        })
        var chatDots = new TimelineMax({
            repeat: -1
        });
        chatDots.from(ChatDot1, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.from(ChatDot2, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.from(ChatDot3, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.to(ChatDot1, 0.2, {
            opacity: 0
        })
        chatDots.to(ChatDot2, 0.2, {
            opacity: 0
        })
        chatDots.to(ChatDot3, 0.2, {
            opacity: 0
        })
        var paintAnim = new TimelineMax({
            repeat: -1
        });
        paintAnim.to(PaintColorX, 1.3, {
            morphSVG: PaintColorStateX2
                //, ease: Linear.easeNone
        });
        paintAnim.to(PaintColorX, 0.1, {});
        paintAnim.to(PaintColorX, 1.3, {
            morphSVG: PaintColorX
                //, ease: Linear.easeNone
        });
        paintAnim.to(PaintColorX, 0.1, {});
        var heartbeat = new TimelineMax({
            repeat: -1
        })
        heartbeat.to(Heart, 1.2, {
            scale: 1.5
            , transformOrigin: '50% 50%'
        })
        heartbeat.to(Heart, 1.7, {
            scale: 1
            , transformOrigin: '50% 50%'
        })
        var mglass = new TimelineMax({
            repeat: -1
        })
        mglass.to(MagniGlass, 2.2, {
            scale: 0.9
            , transformOrigin: '60% 50%'
        })
        mglass.to(MagniGlass, 2.7, {
            scale: 1
            , transformOrigin: '60% 50%'
        })
        TweenMax.from(SPath, 2.5, {
            "stroke-dashoffset": '8.4'
            , repeat: -1
            , ease: Linear.easeNone
        })
        TweenMax.from(WPath, 2.5, {
            "stroke-dashoffset": '8.4'
            , repeat: -1
            , ease: Linear.easeNone
        })

        function animateBubbles() {
            /****** BUBBLE 1 ******/
            ArrayOfBubbles = [Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, Bubble6, Bubble7, Bubble8]
            globalOpacity = 0.85
            for (var i = 0; i < ArrayOfBubbles.length; i++) {
                TweenMax.set(ArrayOfBubbles[i], {
                    opacity: 0
                    , scale: 0
                })
            }
            //                            1    2    3    4    5    6    7    8
            BubbleEndPoint = [undefined, -37, -39, -40, -45, -47, -43, -42, -38]
                //                           1  2  3  4  5  6  7  8
            BubbleAnimTime = [undefined, 6, 12, 5, 14, 8, 4, 13, 7]
            BubbleAnimDelay = [undefined, 0, 1.5, 4, 6, 8, 10, 12, 14]
            var min = -2
            var max = 4
            var b1 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[1]
            });
            b1.to(Bubble1, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b1.to(Bubble1, BubbleAnimTime[1], {
                y: BubbleEndPoint[1]
                , ease: Linear.easeNone
            }, "-=1")
            b1.to(Bubble1, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b2 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[2]
            });
            b2.set(Bubble2, {
                transformOrigin: "50% 50%"
            })
            b2.to(Bubble2, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b2.to(Bubble2, BubbleAnimTime[2], {
                y: BubbleEndPoint[2]
                , ease: Linear.easeNone
            }, "-=1")
            b2.to(Bubble2, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b3 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[3]
            });
            b3.set(Bubble3, {
                transformOrigin: "50% 50%"
            })
            b3.to(Bubble3, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b3.to(Bubble3, BubbleAnimTime[3], {
                y: BubbleEndPoint[3]
                , ease: Linear.easeNone
            }, "-=1")
            b3.to(Bubble3, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b4 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[4]
            });
            b4.set(Bubble4, {
                transformOrigin: "50% 50%"
            })
            b4.to(Bubble4, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b4.to(Bubble4, BubbleAnimTime[4], {
                y: BubbleEndPoint[4]
                , ease: Linear.easeNone
            }, "-=1")
            b4.to(Bubble4, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b5 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[5]
            });
            b5.set(Bubble5, {
                transformOrigin: "50% 50%"
            })
            b5.to(Bubble5, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b5.to(Bubble5, BubbleAnimTime[5], {
                y: BubbleEndPoint[5]
                , ease: Linear.easeNone
            }, "-=1")
            b5.to(Bubble5, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b6 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[6]
            });
            b6.set(Bubble6, {
                transformOrigin: "50% 50%"
            })
            b6.to(Bubble6, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b6.to(Bubble6, BubbleAnimTime[6], {
                y: BubbleEndPoint[6]
                , ease: Linear.easeNone
            }, "-=1")
            b6.to(Bubble6, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b7 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[7]
            });
            b7.set(Bubble7, {
                transformOrigin: "50% 50%"
            })
            b7.to(Bubble7, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b7.to(Bubble7, BubbleAnimTime[7], {
                y: BubbleEndPoint[7]
                , ease: Linear.easeNone
            }, "-=1")
            b7.to(Bubble7, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b8 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[8]
            });
            b8.set(Bubble8, {
                transformOrigin: "50% 50%"
            })
            b8.to(Bubble8, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            , })
            b8.to(Bubble8, BubbleAnimTime[8], {
                y: BubbleEndPoint[8]
                , ease: Linear.easeNone
            }, "-=1")
            b8.to(Bubble8, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
        }

        function animateClouds() {
            /*** CLOUD 1 ***/
            var c1Timeline = new TimelineMax({
                repeat: -1
            });
            c1Timeline.to(Cloud1, 0, {
                x: "-60"
                , opacity: 0
            , });
            c1Timeline.to(Cloud1, 3, {
                opacity: 0.2
            , });
            c1Timeline.to(Cloud1, 25, {
                x: "50"
                , ease: Linear.easeNone
            , }, "-= 3");
            c1Timeline.to(Cloud1, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            /*** CLOUD 2 ***/
            var c2Timeline = new TimelineMax({
                repeat: -1
            });
            c2Timeline.to(Cloud2, 0, {
                x: "230"
                , opacity: 0
            , });
            c2Timeline.to(Cloud2, 3, {
                opacity: 0.2
            , });
            c2Timeline.to(Cloud2, 130, {
                x: "-80"
                , ease: Linear.easeNone
            , }, "-= 3");
            c2Timeline.to(Cloud2, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            var c3Timeline = new TimelineMax({
                repeat: -1
            });
            c3Timeline.to(Cloud3, 0, {
                x: "370"
                , opacity: 0
            , });
            c3Timeline.to(Cloud3, 3, {
                opacity: 0.2
            , });
            c3Timeline.to(Cloud3, 70, {
                x: "200"
                , ease: Linear.easeNone
            , }, "-= 3");
            c3Timeline.to(Cloud3, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            /*** CLOUD 6 ***/
            var c6Timeline = new TimelineMax({
                repeat: -1
            });
            c6Timeline.to(Cloud6, 0, {
                x: "-400"
                , opacity: 0
            , });
            c6Timeline.to(Cloud6, 3, {
                opacity: 0.2
            , });
            c6Timeline.to(Cloud6, 70, {
                x: "-250"
                , ease: Linear.easeNone
            , }, "-= 3");
            c6Timeline.to(Cloud6, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            var BalloonTimeline = new TimelineMax({
                repeat: -1
            });
            BalloonTimeline.to(Balloon, 8, {
                y: "-20"
                , ease: Linear.easeNone
            , });
            BalloonTimeline.to(Balloon, 8, {
                y: "0"
                , ease: Linear.easeNone
            , });
            var SunCenterTimeline = new TimelineMax({
                repeat: -1
            });
            SunCenterTimeline.from(SunCenter, 15, {
                rotation: 90
                , ease: Linear.easeNone
                , transformOrigin: "50% 50%"
            , });
        }

        function getRandomInt(min, max) {
            return (((Math.random() * (max - min + 1)) << 0) + min);
        }
    }
}

function animateFront_M() {
    var frontSVG = document.getElementById("FrontSVG_M");
    var fs = frontSVG.contentDocument;
    if (fs !== null) {
        //mobile = true;
        TweenLite.ticker.fps(60);
        TweenMax.ticker.fps(60);
        var UNPath = fs.getElementById("UNPath")
        var YellowRoadPath = fs.getElementById("YellowRoadPath");
        var YellowRoad2Path = fs.getElementById("YellowRoad2Path");
        var BlueRoadPath = fs.getElementById("BlueRoadPath");
        var JPath = fs.getElementById("JPath")
        var SPath = fs.getElementById("SPath")
        var WPath = fs.getElementById("WPath")
        var Page = fs.getElementById("Page")
        var Text0 = fs.getElementById("Text0")
        var Text1 = fs.getElementById("Text1")
        var Plane = fs.getElementById("Plane")
        var PlaneLineSmall = fs.getElementById("PlaneLineSmall")
        var PlaneLineBig = fs.getElementById("PlaneLineBig")
        var ZPath = fs.getElementById("ZPath")
        var BulbMiniGlow = fs.getElementById("BulbMiniGlow")
        var IdeaGlow = fs.getElementById("IdeaGlow")
        var BigBulbIllumination = fs.getElementById("BigBulbIllumination")
        var BulbFlicker = fs.getElementById("BulbFlicker")
        var EnlargedImage = fs.getElementById("EnlargedImage")
        var MagniGlass = fs.getElementById("MagniGlass")
        var ChatDot1 = fs.getElementById("ChatDot1")
        var ChatDot2 = fs.getElementById("ChatDot2")
        var ChatDot3 = fs.getElementById("ChatDot3")
        var Bubble1 = fs.getElementById("Bubble1")
        var Bubble2 = fs.getElementById("Bubble2")
        var Bubble3 = fs.getElementById("Bubble3")
        var Bubble4 = fs.getElementById("Bubble4")
        var Bubble5 = fs.getElementById("Bubble5")
        var Bubble6 = fs.getElementById("Bubble6")
        var Bubble7 = fs.getElementById("Bubble7")
        var Bubble8 = fs.getElementById("Bubble8")
            /*** SKY ***/
        var SunCenter = fs.getElementById("SunCenter")
        var SunShine = fs.getElementById("SunShine")
        var Balloon = fs.getElementById("Balloon")
        var Cloud1 = fs.getElementById("Cloud1")
        var Cloud2 = fs.getElementById("Cloud2")
        var Cloud3 = fs.getElementById("Cloud3")
        var Cloud4 = fs.getElementById("Cloud4")
        var Cloud5 = fs.getElementById("Cloud5")
        var Cloud6 = fs.getElementById("Cloud6")
        var PaintColorX = fs.getElementById("PaintColorX")
        var PaintColorState1 = fs.getElementById("PaintColorState1")
        var PaintColorStateX2 = fs.getElementById("PaintColorStateX2")
        var PaintFill = fs.getElementById("PaintFill")
        var TubeLiquid = fs.getElementById("TubeLiquid")
        var TubeLiquidState2 = fs.getElementById("TubeLiquidState2")
        var CheckBox1 = fs.getElementById("CheckBox1")
        var CheckBox2 = fs.getElementById("CheckBox2")
        var CheckBox3 = fs.getElementById("CheckBox3")
        var FullCheckBox1 = fs.getElementById("FullCheckBox1")
        var FullCheckBox2 = fs.getElementById("FullCheckBox2")
        var FullCheckBox3 = fs.getElementById("FullCheckBox3")
        var CheckTick1 = fs.getElementById("CheckTick1")
        var CheckTick2 = fs.getElementById("CheckTick2")
        var CheckTick3 = fs.getElementById("CheckTick3")
        var CheckBoxEmpty = fs.getElementById("CheckBoxEmpty")
        var CheckList = new TimelineMax({
            repeat: -1
            , delay: 1
        });
        CheckList.set(CheckTick1, {
            opacity: 0
        })
        CheckList.set(CheckTick2, {
            opacity: 0
        })
        CheckList.set(CheckTick3, {
            opacity: 0
        })
        CheckList.to(FullCheckBox1, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick1, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(FullCheckBox2, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick2, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(FullCheckBox3, 1, {
            opacity: 0
            , ease: Linear.easeNone
        })
        CheckList.to(CheckTick3, 1, {
            opacity: 1
        }, "-=1")
        CheckList.to(CheckTick1, 1, {
            opacity: 0
        })
        CheckList.to(FullCheckBox1, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(FullCheckBox2, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(FullCheckBox3, 1, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        CheckList.to(CheckTick2, 1, {
            opacity: 0
        }, "-=1")
        CheckList.to(CheckTick3, 1, {
            opacity: 0
        }, "-=1")
        TweenMax.set(PaintFill, {
            scaleY: 0
        })
        var PaintFillAnim = new TimelineMax({
            repeat: -1
        })
        PaintFillAnim.to(PaintFill, 3, {
            scaleY: 1
        })
        PaintFillAnim.to(PaintFill, 1, {
            opacity: 0
        })
        var TubeAnim = new TimelineMax({
            repeat: -1
        })
        TubeAnim.to(TubeLiquid, 1, {
            morphSVG: TubeLiquidState2
            , ease: Linear.easeNone
        })
        TubeAnim.to(TubeLiquid, 1, {
            morphSVG: TubeLiquid
            , ease: Linear.easeNone
        });
        var PrinterAnim = new TimelineMax({
            repeat: -1
        })
        TweenMax.set(Text1, {
            opacity: 0
        })
        TweenMax.set(Text0, {
            opacity: 0
        })
        PrinterAnim.from(Page, 1, {
            opacity: 0
        })
        PrinterAnim.to(Page, 4, {
            y: "+=30"
            , ease: Linear.easeNone
        })
        PrinterAnim.to(Text1, 1, {
            opacity: 1
        }, "-=1.5")
        PrinterAnim.to(Text0, 1, {
            opacity: 1
        }, "-=1.5")
        PrinterAnim.to(Page, 1, {})
        PrinterAnim.to(Page, 0.5, {
            opacity: 0
        })
        var Heart = fs.getElementById("Heart");
        var BigBulbIllumination = fs.getElementById("BigBulbIllumination");
        animateBubbles();
        animateClouds();
        TweenMax.from(YellowRoadPath, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        TweenMax.from(YellowRoad2Path, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        TweenMax.from(BlueRoadPath, 1, {
            "stroke-dashoffset": '16.8'
            , repeat: -1
            , ease: Linear.easeNone
        });
        var BigBulbAnim = new TimelineMax({
            repeat: -1
        })
        BigBulbAnim.to(BulbFlicker, 0.5, {
            opacity: 1
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BulbFlicker, 0.2, {
            opacity: 0
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BulbFlicker, 0.5, {
            opacity: 1
            , blur: '100%'
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BigBulbIllumination, 0.5, {
            opacity: 1
            , blur: '8%'
            , ease: Linear.easeNone
        }, "-=1")
        BigBulbAnim.to(BulbFlicker, 0.2, {
            opacity: 0
            , ease: Linear.easeNone
        })
        BigBulbAnim.to(BigBulbIllumination, 1.4, {
            opacity: 1
            , ease: Linear.easeNone
        }, "-=1")
        BigBulbAnim.to(BigBulbIllumination, 0.7, {
            opacity: 0
            , ease: Linear.easeNone
        })
        TweenMax.set(IdeaGlow, {
            opacity: 0
            , scale: 0
        })
        var BulbAnim = new TimelineMax({
            repeat: 1
        })
        BulbAnim.from(BulbMiniGlow, 0.1, {
            opacity: 1
        })
        BulbAnim.to(BulbMiniGlow, 0.1, {
            opacity: 0
        })
        BulbAnim.to(IdeaGlow, 0.1, {
            opacity: 1
            , scale: 1
        })
        BulbAnim.to(IdeaGlow, 0.2, {
            opacity: 0
            , scale: 0
        })
        BulbAnim.to(IdeaGlow, 0.1, {
            opacity: 1
            , scale: 1
        })
        BulbAnim.from(BulbMiniGlow, 0.1, {
            opacity: 1
        })
        var PlaneAppear = new TimelineMax({
            repeat: -1
        });
        PlaneAppear.from(PlaneLineBig, 2, {
            drawSVG: '100% 100%'
            , x: '-10'
            , y: '10'
        })
        PlaneAppear.from(PlaneLineSmall, 2, {
            drawSVG: '100% 100%'
            , x: '-10'
            , y: '10'
        }, "-=2")
        PlaneAppear.from(Plane, 2, {
            x: "-=10"
            , y: "+=10"
        }, "-=2")
        PlaneAppear.set({}, {}, 1);
        PlaneAppear.to(PlaneLineBig, 1, {
            drawSVG: '100% 100%'
            , opacity: 0
        })
        PlaneAppear.to(PlaneLineSmall, 1, {
            drawSVG: '100% 100%'
            , opacity: 0
        }, "-=1")
        PlaneAppear.set({}, {}, 1)
        PlaneAppear.to(Plane, 1.5, {
            opacity: 0
            , x: "+=10"
            , y: "-=10"
        })
        var chatDots = new TimelineMax({
            repeat: -1
        });
        chatDots.from(ChatDot1, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.from(ChatDot2, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.from(ChatDot3, 1, {
            y: "-3"
            , opacity: 0
        })
        chatDots.to(ChatDot1, 0.2, {
            opacity: 0
        })
        chatDots.to(ChatDot2, 0.2, {
            opacity: 0
        })
        chatDots.to(ChatDot3, 0.2, {
            opacity: 0
        })
        var paintAnim = new TimelineMax({
            repeat: -1
        });
        paintAnim.to(PaintColorX, 1.3, {
            morphSVG: PaintColorStateX2
                //, ease: Linear.easeNone
        });
        paintAnim.to(PaintColorX, 0.1, {});
        paintAnim.to(PaintColorX, 1.3, {
            morphSVG: PaintColorX
                //, ease: Linear.easeNone
        });
        paintAnim.to(PaintColorX, 0.1, {});
        var heartbeat = new TimelineMax({
            repeat: -1
        })
        heartbeat.to(Heart, 1.2, {
            scale: 1.5
            , transformOrigin: '50% 50%'
        })
        heartbeat.to(Heart, 1.7, {
            scale: 1
            , transformOrigin: '50% 50%'
        })
        var mglass = new TimelineMax({
            repeat: -1
        })
        mglass.to(MagniGlass, 2.2, {
            scale: 0.9
            , transformOrigin: '60% 50%'
        })
        mglass.to(MagniGlass, 2.7, {
            scale: 1
            , transformOrigin: '60% 50%'
        })
        TweenMax.from(SPath, 2.5, {
            "stroke-dashoffset": '8.4'
            , repeat: -1
            , ease: Linear.easeNone
        })
        TweenMax.from(WPath, 2.5, {
            "stroke-dashoffset": '8.4'
            , repeat: -1
            , ease: Linear.easeNone
        })

        function animateBubbles() {
            /****** BUBBLE 1 ******/
            ArrayOfBubbles = [Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, Bubble6, Bubble7, Bubble8]
            globalOpacity = 0.85
            for (var i = 0; i < ArrayOfBubbles.length; i++) {
                TweenMax.set(ArrayOfBubbles[i], {
                    opacity: 0
                    , scale: 0
                })
            }
            //                            1    2    3    4    5    6    7    8
            BubbleEndPoint = [undefined, -37, -39, -40, -45, -47, -43, -42, -38]
                //                           1  2  3  4  5  6  7  8
            BubbleAnimTime = [undefined, 6, 12, 5, 14, 8, 4, 13, 7]
            BubbleAnimDelay = [undefined, 0, 1.5, 4, 6, 8, 10, 12, 14]
            var min = -2
            var max = 4
            var b1 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[1]
            });
            b1.to(Bubble1, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b1.to(Bubble1, BubbleAnimTime[1], {
                y: BubbleEndPoint[1]
                , ease: Linear.easeNone
            }, "-=1")
            b1.to(Bubble1, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b2 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[2]
            });
            b2.set(Bubble2, {
                transformOrigin: "50% 50%"
            })
            b2.to(Bubble2, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b2.to(Bubble2, BubbleAnimTime[2], {
                y: BubbleEndPoint[2]
                , ease: Linear.easeNone
            }, "-=1")
            b2.to(Bubble2, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b3 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[3]
            });
            b3.set(Bubble3, {
                transformOrigin: "50% 50%"
            })
            b3.to(Bubble3, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b3.to(Bubble3, BubbleAnimTime[3], {
                y: BubbleEndPoint[3]
                , ease: Linear.easeNone
            }, "-=1")
            b3.to(Bubble3, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b4 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[4]
            });
            b4.set(Bubble4, {
                transformOrigin: "50% 50%"
            })
            b4.to(Bubble4, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b4.to(Bubble4, BubbleAnimTime[4], {
                y: BubbleEndPoint[4]
                , ease: Linear.easeNone
            }, "-=1")
            b4.to(Bubble4, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b5 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[5]
            });
            b5.set(Bubble5, {
                transformOrigin: "50% 50%"
            })
            b5.to(Bubble5, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b5.to(Bubble5, BubbleAnimTime[5], {
                y: BubbleEndPoint[5]
                , ease: Linear.easeNone
            }, "-=1")
            b5.to(Bubble5, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b6 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[6]
            });
            b6.set(Bubble6, {
                transformOrigin: "50% 50%"
            })
            b6.to(Bubble6, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b6.to(Bubble6, BubbleAnimTime[6], {
                y: BubbleEndPoint[6]
                , ease: Linear.easeNone
            }, "-=1")
            b6.to(Bubble6, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b7 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[7]
            });
            b7.set(Bubble7, {
                transformOrigin: "50% 50%"
            })
            b7.to(Bubble7, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            })
            b7.to(Bubble7, BubbleAnimTime[7], {
                y: BubbleEndPoint[7]
                , ease: Linear.easeNone
            }, "-=1")
            b7.to(Bubble7, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
            var b8 = new TimelineMax({
                repeat: -1
                , delay: BubbleAnimDelay[8]
            });
            b8.set(Bubble8, {
                transformOrigin: "50% 50%"
            })
            b8.to(Bubble8, 1, {
                opacity: globalOpacity
                , scale: 1
                , x: getRandomInt(min, max)
            , })
            b8.to(Bubble8, BubbleAnimTime[8], {
                y: BubbleEndPoint[8]
                , ease: Linear.easeNone
            }, "-=1")
            b8.to(Bubble8, 1, {
                opacity: 0
                , scale: 0
            }, "-=1")
        }

        function animateClouds() {
            /*** CLOUD 1 ***/
            var c1Timeline = new TimelineMax({
                repeat: -1
            });
            c1Timeline.to(Cloud1, 0, {
                x: "-60"
                , opacity: 0
            , });
            c1Timeline.to(Cloud1, 3, {
                opacity: 0.2
            , });
            c1Timeline.to(Cloud1, 25, {
                x: "50"
                , ease: Linear.easeNone
            , }, "-= 3");
            c1Timeline.to(Cloud1, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            /*** CLOUD 2 ***/
            var c2Timeline = new TimelineMax({
                repeat: -1
            });
            c2Timeline.to(Cloud2, 0, {
                x: "230"
                , opacity: 0
            , });
            c2Timeline.to(Cloud2, 3, {
                opacity: 0.2
            , });
            c2Timeline.to(Cloud2, 130, {
                x: "-80"
                , ease: Linear.easeNone
            , }, "-= 3");
            c2Timeline.to(Cloud2, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            var c3Timeline = new TimelineMax({
                repeat: -1
            });
            c3Timeline.to(Cloud3, 0, {
                x: "370"
                , opacity: 0
            , });
            c3Timeline.to(Cloud3, 3, {
                opacity: 0.2
            , });
            c3Timeline.to(Cloud3, 70, {
                x: "200"
                , ease: Linear.easeNone
            , }, "-= 3");
            c3Timeline.to(Cloud3, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            /*** CLOUD 6 ***/
            var c6Timeline = new TimelineMax({
                repeat: -1
            });
            c6Timeline.to(Cloud6, 0, {
                x: "-400"
                , opacity: 0
            , });
            c6Timeline.to(Cloud6, 3, {
                opacity: 0.2
            , });
            c6Timeline.to(Cloud6, 70, {
                x: "-250"
                , ease: Linear.easeNone
            , }, "-= 3");
            c6Timeline.to(Cloud6, 0.4, {
                opacity: 0
                , ease: Linear.easeNone
            , }, "-=1");
            var BalloonTimeline = new TimelineMax({
                repeat: -1
            });
            BalloonTimeline.to(Balloon, 8, {
                y: "-20"
                , ease: Linear.easeNone
            , });
            BalloonTimeline.to(Balloon, 8, {
                y: "0"
                , ease: Linear.easeNone
            , });
            var SunCenterTimeline = new TimelineMax({
                repeat: -1
            });
            SunCenterTimeline.from(SunCenter, 15, {
                rotation: 90
                , ease: Linear.easeNone
                , transformOrigin: "50% 50%"
            , });
        }

        function getRandomInt(min, max) {
            return (((Math.random() * (max - min + 1)) << 0) + min);
        }
    }
}

function animateDesk() {
    var DeskSVG;
    if (mobile) {
        DeskSVG = document.getElementById("DeskSVG_M");
    }
    else {
        DeskSVG = document.getElementById("DeskSVG");
    }
    var ds = DeskSVG.contentDocument;
    HeadphoneLeft = ds.getElementById("HeadphoneLeft")
    HeadphoneRight = ds.getElementById("HeadphoneRight")
    PhoneScreenWhite = ds.getElementById("PhoneScreenWhite")
    WeLoveText = ds.getElementById("we-love-text");
    MusicNote1 = ds.getElementById("music_note_1");
    MusicNote2 = ds.getElementById("music_note_2");
    MusicNote3 = ds.getElementById("music_note_3");
    MusicNote4 = ds.getElementById("music_note_4");
    MusicPath1 = ds.getElementById("music_path_a");
    MusicPath2 = ds.getElementById("music_path_b");
    //console.log("isNull : ", MusicNote1)
    var musicNotes = new TimelineMax({
        repeat: -1
    })
    var timing = [2, 2, 2, 2]
    musicNotes.from(MusicNote1, timing[0], {
        x: "-40"
        , y: "40"
        , opacity: 0
    })
    musicNotes.from(MusicNote2, timing[1], {
        x: "-40"
        , y: "40"
        , opacity: 0
    }, "-=" + timing[0])
    musicNotes.from(MusicNote3, timing[2], {
        x: "-40"
        , y: "40"
        , opacity: 0
    }, "-=" + timing[1])
    musicNotes.from(MusicNote4, timing[3], {
        x: "-40"
        , y: "40"
        , opacity: 0
    }, "-=" + timing[2])
    musicNotes.from(MusicPath1, timing[3], {
        x: "-40"
        , y: "40"
        , opacity: 0
        , drawSVG: "0%"
        , ease: Linear.easeIn
    }, "-=" + timing[3])
    musicNotes.from(MusicPath2, timing[2], {
            x: "-40"
            , y: "40"
            , opacity: 0
            , drawSVG: "0%"
            , ease: Linear.easeOut
        }, "-=" + timing[3])
        /// BACK
    musicNotes.to(MusicNote1, timing[0], {
        x: "40"
        , y: "-40"
        , opacity: 0
    })
    musicNotes.to(MusicNote2, timing[1], {
        x: "40"
        , y: "-40"
        , opacity: 0
    }, "-=" + timing[0])
    musicNotes.to(MusicNote3, timing[2], {
        x: "40"
        , y: "-40"
        , opacity: 0
    }, "-=" + timing[1])
    musicNotes.to(MusicNote4, timing[3], {
        x: "40"
        , y: "-40"
        , opacity: 0
    }, "-=" + timing[2])
    musicNotes.to(MusicPath1, timing[3], {
        x: "40"
        , y: "-40"
        , opacity: 0
        , drawSVG: "0%"
    }, "-=" + timing[2])
    musicNotes.to(MusicPath2, timing[3], {
        x: "40"
        , y: "-40"
        , opacity: 0
        , drawSVG: "0%"
    }, "-=" + timing[2])
    var musicOscillation = new TimelineMax({
        repeat: -1
    })
    musicOscillation.to(MusicNote1, 0.5, {
        rotation: -10
        , ease: Linear.easeNone
        , scale: 1.1
        , transformOrigin: "50% 50%"
    }, "0")
    musicOscillation.to(MusicNote1, 0.5, {
        rotation: 0
        , scale: 1.0
        , ease: Linear.easeNone
        , transformOrigin: "50% 50%"
    })
    musicOscillation.to(MusicNote2, 0.5, {
        rotation: 10
        , ease: Linear.easeNone
        , scale: 1.1
        , transformOrigin: "50% 50%"
    }, "0")
    musicOscillation.to(MusicNote2, 0.5, {
        rotation: 0
        , scale: 1.0
        , ease: Linear.easeNone
        , transformOrigin: "50% 50%"
    })
    var Vibration = new TimelineMax({
        repeat: -1
    });
    //console.log("mobile : ", mobile);
    if (mobile) {
        /*
        TweenMax.set(WeLoveText, {
            opacity: 0
        });
        */
    }
    var waveTime = 0.05
    Vibration.to(HeadphoneLeft, waveTime, {
        scale: 1.1
        , transformOrigin: "50% 50%"
    })
    Vibration.to(HeadphoneRight, waveTime, {
        scale: 1.1
        , transformOrigin: "50% 50%"
    }, "-=" + waveTime)
    Vibration.to(HeadphoneLeft, waveTime, {
        scale: 1
    })
    Vibration.to(HeadphoneRight, waveTime, {
        scale: 1
    })
    var PhoneFlashing = new TimelineMax({
        repeat: -1
    })
    PhoneFlashing.to(PhoneScreenWhite, 0.7, {
        opacity: 0.8
        , scale: 1.1
        , transformOrigin: "50% 50%"
        , blur: "20%"
    })
    PhoneFlashing.to(PhoneScreenWhite, 0.5, {
        opacity: 0
    })
}

function setupBubbles() {
    var BubblesOverlay = $('#BubblesOverlay');
    var Right = $('#services .right');
    BubblesOverlay.css('position', 'absolute')
    BubblesOverlay.css('left', Right.position().left)
    BubblesOverlay.css('top', Right.position().top)
    BubblesOverlay.css('width', Right.width())
    BubblesOverlay.css('height', Right.height())
    var q = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (var i = 0; i < 8; i++) {
        $('#b-' + q[i] + ' #textBoxBoilerplate').css('opacity', 0)
    }
    $('.BubbleContainer').css('display', 'none');
}

function hideAllExcept(dont){
    var q = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (var i = 0; i < 8; i++) {
        if(i != dont - 1){
            $('#b-' + q[i] + '-parent').css('display','none')
        }
    }
}

function animateBulbs() {
    if (!ServicesAnimationComplete) {
        TweenMax.to(BulbsSVGContent, 1, {
                opacity: 1
            })
        Bulb1 = bs.getElementById("Bulb1");
        Bulb2 = bs.getElementById("Bulb2");
        Bulb3 = bs.getElementById("Bulb3");
        Bulb4 = bs.getElementById("Bulb4");
        Bulb5 = bs.getElementById("Bulb5");
        Bulb6 = bs.getElementById("Bulb6");
        Bulb7 = bs.getElementById("Bulb7");
        Bulb8 = bs.getElementById("Bulb8");
        Bulb1Light = bs.getElementById("Bulb1-Light");
        Bulb2Light = bs.getElementById("Bulb2-Light");
        Bulb3Light = bs.getElementById("Bulb3-Light");
        Bulb4Light = bs.getElementById("Bulb4-Light");
        Bulb5Light = bs.getElementById("Bulb5-Light");
        Bulb6Light = bs.getElementById("Bulb6-Light");
        Bulb7Light = bs.getElementById("Bulb7-Light");
        Bulb8Light = bs.getElementById("Bulb8-Light");
        $(Bulb1).click(function () {
            hideAllExcept(1)
            var target = $('#b-a-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-a-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-a'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "0 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-a-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb2).click(function () {
            hideAllExcept(2)
            var target = $('#b-b-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-b-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-b'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "0 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-b-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb3).click(function () {
            hideAllExcept(3)
            var target = $('#b-c-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-c-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-c'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "100 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-c-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb4).click(function () {
            hideAllExcept(4)
            var target = $('#b-d-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-d-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-d'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "100 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-d-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb5).click(function () {
            hideAllExcept(5)
            var target = $('#b-e-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-e-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-e'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "0 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-e-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb6).click(function () {
            hideAllExcept(6)
            var target = $('#b-f-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-f-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-f'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "0 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-f-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb7).click(function () {
            hideAllExcept(7)
            var target = $('#b-g-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-g-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-g'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "100 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-g-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        $(Bulb8).click(function () {
            hideAllExcept(8)
            var target = $('#b-h-parent');
            if (target.css('display') == "none") {
                target.css('display', 'block')
                /***/
                TweenMax.set($('#b-h-parent .Description'), {
                    opacity: 0
                })
                TweenMax.from($('#b-h'), 0.5, {
                    scale: 0
                    , ease: Elastic.easeOut.config(1, 0.75)
                    , transformOrigin: "100 0"
                    , onComplete: function () {
                        TweenMax.to($('#b-h-parent .Description'), 0.2, {
                            opacity: 1
                        })
                    }
                })
                /***/
            }
            else target.css('display', 'none')
        })
        
        ArrayOfBulbs = [0, Bulb1, Bulb2, Bulb3, Bulb4, Bulb5, Bulb6, Bulb7, Bulb8, Bulb1Light, Bulb2Light, Bulb3Light, Bulb4Light, Bulb5Light, Bulb6Light, Bulb7Light, Bulb8Light];
        ArrayOfLights = [Bulb1Light, Bulb2Light, Bulb3Light, Bulb4Light, Bulb5Light, Bulb6Light, Bulb7Light, Bulb8Light]
        var BulbGlowInSpeed = 0.7
        var BulbGlowOutSpeed = 0.3

        function setupHoverEvents() {
            var tl = new TimelineMax()
            var Bulbs = [{}, {
                bulb: Bulb1
                , light: Bulb1Light
        }, {
                bulb: Bulb2
                , light: Bulb2Light
        }, {
                bulb: Bulb3
                , light: Bulb3Light
        }, {
                bulb: Bulb4
                , light: Bulb4Light
        }, {
                bulb: Bulb5
                , light: Bulb5Light
        }, {
                bulb: Bulb6
                , light: Bulb6Light
        }, {
                bulb: Bulb7
                , light: Bulb7Light
        }, {
                bulb: Bulb8
                , light: Bulb8Light
        }]
            $(Bulbs[1].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[1].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[1].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[1].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[1].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[1].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*tl.to(Bulbs[1].light, BulbGlowOutSpeed, {
                        opacity: 0
                        , ease: Bounce.easeOut
                    }
                    , "-=" + 0.5)*/
            });
            $(Bulbs[2].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[2].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[2].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[2].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[2].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[2].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*  tl.to(Bulbs[2].light, BulbGlowOutSpeed, {
                          opacity: 0
                          , ease: Bounce.easeOut
                      }
                      , "-=" + 0.5)*/
            });
            $(Bulbs[3].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[3].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[3].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[3].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[3].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[3].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*
                                    tl.to(Bulbs[3].light, BulbGlowOutSpeed, {
                                            opacity: 0
                                            , ease: Bounce.easeOut
                                        }
                                        , "-=" + 0.5)*/
            });
            $(Bulbs[4].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[4].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[4].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[4].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[4].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[4].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*
                                    tl.to(Bulbs[4].light, BulbGlowOutSpeed, {
                                            opacity: 0
                                            , ease: Bounce.easeOut
                                        }
                                        , "-=" + 0.5)*/
            });
            $(Bulbs[5].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[5].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[5].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[5].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[5].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[5].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*tl.to(Bulbs[5].light, BulbGlowOutSpeed, {
                        opacity: 0
                        , ease: Bounce.easeOut
                    }
                    , "-=" + 0.5)*/
            });
            $(Bulbs[6].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[6].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[6].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[6].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[6].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[6].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*tl.to(Bulbs[6].light, BulbGlowOutSpeed, {
                        opacity: 0
                        , ease: Bounce.easeOut
                    }
                    , "-=" + 0.5)*/
            });
            $(Bulbs[7].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[7].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[7].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[7].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[7].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[7].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*tl.to(Bulbs[7].light, BulbGlowOutSpeed, {
                        opacity: 0
                        , ease: Bounce.easeOut
                    }
                    , "-=" + 0.5)*/
            });
            $(Bulbs[8].bulb).hover(function () {
                tl = new TimelineMax()
                rl = new TimelineMax()
                rl.to(Bulbs[8].bulb, 0.5, {
                    rotation: 1
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[8].bulb, 1, {
                    rotation: -0.8
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[8].bulb, 1, {
                    rotation: 0.4
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                rl.to(Bulbs[8].bulb, 1, {
                    rotation: 0
                    , transformOrigin: '50% 0%'
                    , ease: Ease.easeIn
                })
                tl.to(Bulbs[8].light, BulbGlowInSpeed, {
                    opacity: 1.5
                    , ease: Elastic.easeOut.config(1, 0.1)
                }, "-=" + BulbGlowInSpeed)
            }, function () {
                /*tl.to(Bulbs[8].light, BulbGlowOutSpeed, {
                        opacity: 0
                        , ease: Bounce.easeOut
                    }
                    , "-=" + 0.5)*/
            });
        }
        setupHoverEvents();
        animateIn = new TimelineMax()
            /*for (var i = 1; i < ArrayOfBulbs.length; i++) {
        if (ArrayOfBulbs[i] == undefined) {
            //console.log("ArrayOfBulbs[" + i + "] : is undefined.")        }
    }*/
        for (light in ArrayOfLights) {
            TweenMax.set(light, {
                opacity: 0
            })
        }
        for (var i = 9; i < ArrayOfBulbs.length; i++) {
            TweenMax.set(ArrayOfBulbs[i], {
                opacity: 0
            })
        }
        for (var i = 1; i < 9; i++) {
            animateIn.from(ArrayOfBulbs[i], 2, {
                y: '-280'
                , opacity: 0
                , ease: Elastic.easeOut.config(0.4, 0.5)
                , onComplete: toggleBulbAnimationStatus
            }, "-=1.8")
        }

        function toggleBulbAnimationStatus() {
            animatingBulbs = false
        }
    }
    if (!animatingBulbs) {
        animatingBulbs = true;
        animateIn.restart();
    }
}

function animateGenius() {
    if (!GeniusAnimationPlayed) {
        GeniusAnimationPlayed = true;
        var GeniusSVG = document.getElementById("GeniusSVG");
        var gs = GeniusSVG.contentDocument;
        var Adobe1 = gs.getElementById("Adobe1");
        var Adobe2 = gs.getElementById("Adobe2");
        var Adobe3 = gs.getElementById("Adobe3");
        var Adobe4 = gs.getElementById("Adobe4");
        var BounceTimeline = new TimelineMax({
            repeat: 0
            , onComplete: resetGeniusMarker
        })
        var upTime = 0.6
        var downTime = 1
        BounceTimeline.to(Adobe1, upTime, {
            y: -15
            , ease: Ease.easeOutQuad
        })
        BounceTimeline.to(Adobe1, downTime, {
            y: 0
            , ease: Bounce.easeOut
        })
        BounceTimeline.to(Adobe2, upTime, {
            y: -15
            , ease: Ease.easeOutQuad
        })
        BounceTimeline.to(Adobe2, downTime, {
            y: 0
            , ease: Bounce.easeOut
        })
        BounceTimeline.to(Adobe3, upTime, {
            y: 15
            , ease: Ease.easeOutQuad
        })
        BounceTimeline.to(Adobe3, downTime, {
            y: 0
            , ease: Bounce.easeOut
        })
        BounceTimeline.to(Adobe4, upTime, {
            y: 15
            , ease: Ease.easeOutQuad
        })
        BounceTimeline.to(Adobe4, downTime, {
            y: 0
            , ease: Bounce.easeOut
        })
    }

    function resetGeniusMarker() {
        GeniusAnimationPlayed = false;
    }
}

function animateTalent() {
    var TalentSVG = document.getElementById("TalentSVG");
    var ts = TalentSVG.contentDocument;
    var Cloud1 = ts.getElementById("Cloud1")
    var Cloud2 = ts.getElementById("Cloud2")
    var Cloud3 = ts.getElementById("Cloud3")
    var Cloud4 = ts.getElementById("Cloud4")
    var Cloud5 = ts.getElementById("Cloud5")
    var Balloon = ts.getElementById("Balloon")
    var c1 = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    c1.to(Cloud1, 8, {
        x: 20
        , ease: Linear.easeNone
    })
    c1.to(Cloud1, 3, {
        x: 30
        , ease: Linear.easeNone
    })
    var c4 = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    c4.to(Cloud4, 8, {
        x: -16
        , ease: Linear.easeNone
    })
    c4.to(Cloud4, 3, {
        x: -20
        , ease: Linear.easeNone
    })
    c4.to(Cloud4, 1, {
        x: -20
        , ease: Linear.easeNone
    })
    var c3 = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    c3.to(Cloud3, 10, {
        x: 15
        , ease: Linear.easeNone
    })
    c3.to(Cloud3, 3, {
        x: 18
        , ease: Linear.easeNone
    })
    var c2 = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    c2.to(Cloud2, 9, {
        x: 15
        , ease: Linear.easeNone
    })
    c2.to(Cloud2, 3, {
        x: 18
        , ease: Linear.easeNone
    })
    c2.to(Cloud2, 1, {
        x: 18
        , ease: Linear.easeNone
    })
    var c5 = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    c5.to(Cloud5, 40, {
        x: -90
        , ease: Linear.easeNone
    })
    c5.to(Cloud5, 8, {
        x: -100
        , ease: Linear.easeNone
    })
    c5.to(Cloud5, 1, {
        x: -100
        , ease: Linear.easeNone
    })
    var BalloonAnim = new TimelineMax({
        repeat: -1
        , yoyo: true
    })
    BalloonAnim.to(Balloon, 5, {
        rotation: 2
        , ease: Linear.easeNone
        , transformOrigin: "50% 50%"
        , y: -6
        , x: -10
    })
    BalloonAnim.to(Balloon, 2, {
        x: -11
        , y: -7
        , ease: Ease.easeOut
    })
}

function animateTypewriter() {
    if (!playedOnce) {
        playedOnce = true;
        var t1 = ps.getElementById("t1")
        var t2 = ps.getElementById("t2")
        var t3 = ps.getElementById("t3")
        var t4 = ps.getElementById("t4")
        var t5 = ps.getElementById("t5")
        var t6 = ps.getElementById("t6")
        var t7 = ps.getElementById("t7")
        var t8 = ps.getElementById("t8")
        var t9 = ps.getElementById("t9")
        var t10 = ps.getElementById("t10")
        var t11 = ps.getElementById("t11")
        var t12 = ps.getElementById("t12")
        var t13 = ps.getElementById("t13")
        var t14 = ps.getElementById("t14")
        var t15 = ps.getElementById("t15")
        var t16 = ps.getElementById("t16")
        var t17 = ps.getElementById("t17")
        var t18 = ps.getElementById("t18")
        var t19 = ps.getElementById("t19")
        var t20 = ps.getElementById("t20")
        var t21 = ps.getElementById("t21")
        var t22 = ps.getElementById("t22")
        var t23 = ps.getElementById("t23")
        var t24 = ps.getElementById("t24")
        var t25 = ps.getElementById("t25")
        var t26 = ps.getElementById("t26")
        var t27 = ps.getElementById("t27")
        var t28 = ps.getElementById("t28")
        var s1 = ps.getElementById("s1")
        var s2 = ps.getElementById("s2")
        var s3 = ps.getElementById("s3")
        var s4 = ps.getElementById("s4")
        var s5 = ps.getElementById("s5")
        var s6 = ps.getElementById("s6")
        var s7 = ps.getElementById("s7")
        var s8 = ps.getElementById("s8")
        var s9 = ps.getElementById("s9")
        var s10 = ps.getElementById("s10")
        var s11 = ps.getElementById("s11")
        var s12 = ps.getElementById("s12")
        var s13 = ps.getElementById("s13")
        var s14 = ps.getElementById("s14")
        var s15 = ps.getElementById("s15")
        var s16 = ps.getElementById("s16")
        var s17 = ps.getElementById("s17")
        var s18 = ps.getElementById("s18")
        var s19 = ps.getElementById("s19")
        var s20 = ps.getElementById("s20")
        var s21 = ps.getElementById("s21")
        var s22 = ps.getElementById("s22")
        var s23 = ps.getElementById("s23")
        var s24 = ps.getElementById("s24")
        var s25 = ps.getElementById("s25")
        var s26 = ps.getElementById("s26")
        var s27 = ps.getElementById("s27")
        var s28 = ps.getElementById("s28")
        var s29 = ps.getElementById("s29")
        var s30 = ps.getElementById("s30")
        var s31 = ps.getElementById("s31")
        var s32 = ps.getElementById("s32")
        var s33 = ps.getElementById("s33")
        var s34 = ps.getElementById("s34")
        var s35 = ps.getElementById("s35")
        var s36 = ps.getElementById("s36")
        var s37 = ps.getElementById("s37")
        var s38 = ps.getElementById("s38")
        var s39 = ps.getElementById("s39")
        var w1 = ps.getElementById("w1")
        var w2 = ps.getElementById("w2")
        var w3 = ps.getElementById("w3")
        var w4 = ps.getElementById("w4")
        var w5 = ps.getElementById("w5")
        var w6 = ps.getElementById("w6")
        var w7 = ps.getElementById("w7")
        var w8 = ps.getElementById("w8")
        var w9 = ps.getElementById("w9")
        var w10 = ps.getElementById("w10")
        var w11 = ps.getElementById("w11")
        var w12 = ps.getElementById("w12")
        var w13 = ps.getElementById("w13")
        var w14 = ps.getElementById("w14")
        var w15 = ps.getElementById("w15")
        var w16 = ps.getElementById("w16")
        var w17 = ps.getElementById("w17")
        var w18 = ps.getElementById("w18")
        var w19 = ps.getElementById("w19")
        var w20 = ps.getElementById("w20")
        var w21 = ps.getElementById("w21")
        var w22 = ps.getElementById("w22")
        var w23 = ps.getElementById("w23")
        var w24 = ps.getElementById("w24")
        var w25 = ps.getElementById("w25")
        var w26 = ps.getElementById("w26")
        var w27 = ps.getElementById("w27")
        var w28 = ps.getElementById("w28")
        var w29 = ps.getElementById("w29")
        var w30 = ps.getElementById("w30")
        var w31 = ps.getElementById("w31")
        var w32 = ps.getElementById("w32")
        var w33 = ps.getElementById("w33")
        var w34 = ps.getElementById("w34")
        var w35 = ps.getElementById("w35")
        var w36 = ps.getElementById("w36")
        var w37 = ps.getElementById("w37")
        var w38 = ps.getElementById("w38")
        var w39 = ps.getElementById("w39")
        var keyQ = ps.getElementById("keyQ") //2
        var keyW = ps.getElementById("keyW") //3
        var keyE = ps.getElementById("keyE") //4
        var keyR = ps.getElementById("keyR") //5
        var keyT = ps.getElementById("keyT") //6
        var keyY = ps.getElementById("keyY") //7
        var keyU = ps.getElementById("keyU") //8
        var keyI = ps.getElementById("keyI") //9
        var keyO = ps.getElementById("keyO") //10
        var keyP = ps.getElementById("keyP") //11
        var keyA = ps.getElementById("keyA") //14
        var keyS = ps.getElementById("keyS") //15
        var keyD = ps.getElementById("keyD") //16
        var keyF = ps.getElementById("keyF") //17
        var keyG = ps.getElementById("keyG") //18
        var keyH = ps.getElementById("keyH") //19
        var keyJ = ps.getElementById("keyJ") //20
        var keyK = ps.getElementById("keyK") //21
        var keyL = ps.getElementById("keyL") //22
        var keyZ = ps.getElementById("keyZ") //26
        var keyX = ps.getElementById("keyX") //27
        var keyC = ps.getElementById("keyC") //28
        var keyV = ps.getElementById("keyV") //29
        var keyB = ps.getElementById("keyB") //30
        var keyN = ps.getElementById("keyN") //31
        var keyM = ps.getElementById("keyM") //32
        var keyApos = ps.getElementById("keyApos") //32
        var keySpace = ps.getElementById("keySpace") //39
        var keyDot = ps.getElementById("keyDot") //39
        var Roller = ps.getElementById("Roller")
        var hitter = ps.getElementById("hitter")
        var ArrayOfLetters = [t1, t2, t3, t4, t5, null, t6, t7, t8, t9, null, t10, t11, null, t12, t13, t14, t15, t16, t17, null, t18, t19, null, t20, t21, t22, t23, t24, t25, t26, t27, t28]
        var ArrayOfSpokes = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39]
        var ArrayOfSpokeEnds = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s3, s38, s39]
        TweenMax.set(hitter, {
            opacity: 0
        })
        TweenMax.set(Paper, {
            opacity: 1
        })
        for (i = 0; i < ArrayOfSpokes.length; i++) {
            if (ArrayOfSpokes[i] == undefined) {
                console.log((i + 1) + " is undefined.")
            }
        }
        for (i = 0; i < ArrayOfSpokeEnds.length; i++) {
            if (ArrayOfSpokeEnds[i] == undefined) {
                console.log((i + 1) + " is undefined.")
            }
        }
        var Line1 = "LET'S HAVE "
        var Line2 = "AN AFFAIR "
        var Line3 = "TO REMEMBER."
        var PaperMaxOffset = 74
        var RollerMaxOffset = 16
        var machineAdjustTime = 0.05 //seconds
        var keyTime = 0.05 //seconds
        var spokeTime = 0.05 //seconds
        var characterWidth = 74 / 16
        var nextCharTime = 0.02 //seconds
        var RollerMoveOffset = (RollerMaxOffset * characterWidth) / PaperMaxOffset
        var lineHeight = 13.8
        keyPress = new TimelineMax({
            delay: 0
            , onComplete: resetTypewriterBool
        })

        function resetTypewriterBool() {
            //console.log("Done");
            GetInTouchAnimationComplete = false;
        }
        for (i = 0; i < ArrayOfLetters.length; i++) {
            if (ArrayOfLetters[i] == undefined) {
                // console.log((i + 1) + " is undefined.")
            }
            else {
                TweenMax.set(ArrayOfLetters[i], {
                    opacity: 0
                })
            }
        }
        for (var i = 0; i < Line1.length; i++) {
            keyPress.to(getLetterElement(Line1[i]).key, keyTime, {
                y: 2
            })
            hitSpoke(getLetterElement(Line1[i]).num)
            if (!(ArrayOfLetters[i] == null)) {
                keyPress.to(ArrayOfLetters[i], 0, {
                    opacity: 1
                })
            }
            else {
                // //console.log("i[" + i + "] is null.")
            }
            keyPress.to(getLetterElement(Line1[i]).key, keyTime, {
                y: 0
            })
            keyPress.to(Paper, nextCharTime, {
                x: "-=" + characterWidth
            })
            keyPress.to(Roller, nextCharTime, {
                x: "-=" + RollerMoveOffset
            }, "-=" + nextCharTime)
        }
        NewLine();
        for (var i = 0; i < Line2.length; i++) {
            keyPress.to(getLetterElement(Line2[i]).key, keyTime, {
                y: 2
            })
            hitSpoke(getLetterElement(Line2[i]).num)
            if (!(ArrayOfLetters[i + Line1.length] == null)) {
                keyPress.to(ArrayOfLetters[i + Line1.length], 0, {
                    opacity: 1
                })
            }
            else {
                ////console.log("i[" + i + "] is null.")
            }
            keyPress.to(getLetterElement(Line2[i]).key, keyTime, {
                y: 0
            })
            keyPress.to(Paper, nextCharTime, {
                x: "-=" + characterWidth
            })
            keyPress.to(Roller, nextCharTime, {
                x: "-=" + RollerMoveOffset
            }, "-=" + nextCharTime)
        }
        NewLine();
        for (var i = 0; i < Line3.length; i++) {
            keyPress.to(getLetterElement(Line3[i]).key, keyTime, {
                y: 2
            })
            hitSpoke(getLetterElement(Line3[i]).num)
            if (!(ArrayOfLetters[i + Line2.length + Line1.length] == null)) {
                keyPress.to(ArrayOfLetters[i + Line2.length + Line1.length], 0, {
                    opacity: 1
                })
            }
            else {
                ////console.log("i[" + i + "] is null.")
            }
            keyPress.to(getLetterElement(Line3[i]).key, keyTime, {
                y: 0
            })
            keyPress.to(Paper, nextCharTime, {
                x: "-=" + characterWidth
            })
            keyPress.to(Roller, nextCharTime, {
                x: "-=" + RollerMoveOffset
            }, "-=" + nextCharTime)
        }
        keyPress.to(Paper, 0.4, {
            opacity: 1
        })
        keyPress.to(Paper, machineAdjustTime, {
            x: "-46"
        })
        keyPress.to(Paper, 1.4, {
            y: "-=" + lineHeight * 3
        })
        clickHere.setAttribute("cursor", "pointer")
        $(clickHere).bind('click', function (event) {
            var $anchor = $(this);
            // var scrollOffset = $('#get-in-touch-text').offset().top + 200
            $('html, body').stop().animate({
                scrollTop: 10240
            }, 600, 'easeInOutExpo');
            event.preventDefault();
            //showTalentForm();
            showAffairForm();
        });
        keyPress.to(clickHere, 0.5, {
            opacity: 1
            , y: 10
        })
        keyPress.to(Paper, 2, {
            opacity: 1
        })

        function hitSpoke(n) {
            n -= 1
            rotationDegree = (n < 19) ? n : -n
            rotationDegree *= 1.2
            keyPress.to(hitter, 0, {
                opacity: 1
                , rotation: rotationDegree
                , transformOrigin: '50% 0%'
            })
            keyPress.to(ArrayOfSpokes[n], 0, {
                opacity: 0
            })
            keyPress.to(ArrayOfSpokeEnds[n], 0, {
                opacity: 0
            })
            keyPress.to(Paper, spokeTime, {
                opacity: 1
            })
            keyPress.to(hitter, 0, {
                opacity: 0
                , rotation: 0
                , transformOrigin: '50% 0%'
            })
            keyPress.to(ArrayOfSpokes[n], 0, {
                opacity: 1
            })
            keyPress.to(ArrayOfSpokeEnds[n], 0, {
                opacity: 1
            })
        }

        function NewLine() {
            keyPress.to(Paper, machineAdjustTime, {
                y: "-=" + lineHeight
            })
            keyPress.to(Paper, machineAdjustTime, {
                x: "-21"
            })
            keyPress.to(Roller, machineAdjustTime, {
                x: 0
            }, "-=" + machineAdjustTime)
        }

        function getLetterElement(l) {
            switch (l) {
            case 'Q':
                return {
                    num: 2
                    , key: keyQ
                }
            case 'W':
                return {
                    num: 3
                    , key: keyW
                }
            case 'E':
                return {
                    num: 4
                    , key: keyE
                }
            case 'R':
                return {
                    num: 5
                    , key: keyR
                }
            case 'T':
                return {
                    num: 6
                    , key: keyT
                }
            case 'Y':
                return {
                    num: 7
                    , key: keyY
                }
            case 'U':
                return {
                    num: 8
                    , key: keyU
                }
            case 'I':
                return {
                    num: 9
                    , key: keyI
                }
            case 'O':
                return {
                    num: 10
                    , key: keyO
                }
            case 'P':
                return {
                    num: 11
                    , key: keyP
                }
            case 'A':
                return {
                    num: 14
                    , key: keyA
                }
            case 'S':
                return {
                    num: 15
                    , key: keyS
                }
            case 'D':
                return {
                    num: 16
                    , key: keyD
                }
            case 'F':
                return {
                    num: 17
                    , key: keyF
                }
            case 'G':
                return {
                    num: 18
                    , key: keyG
                }
            case 'H':
                return {
                    num: 19
                    , key: keyH
                }
            case 'J':
                return {
                    num: 20
                    , key: keyJ
                }
            case 'K':
                return {
                    num: 21
                    , key: keyK
                }
            case 'L':
                return {
                    num: 22
                    , key: keyL
                }
            case 'Z':
                return {
                    num: 26
                    , key: keyZ
                }
            case 'X':
                return {
                    num: 27
                    , key: keyX
                }
            case 'C':
                return {
                    num: 28
                    , key: keyC
                }
            case 'V':
                return {
                    num: 29
                    , key: keyV
                }
            case 'B':
                return {
                    num: 30
                    , key: keyB
                }
            case 'N':
                return {
                    num: 31
                    , key: keyN
                }
            case 'M':
                return {
                    num: 32
                    , key: keyM
                }
            case "'":
                return {
                    num: 33
                    , key: keyApos
                }
            case ' ':
                return {
                    num: 36
                    , key: keySpace
                }
            case '.':
                return {
                    num: 32
                    , key: keyDot
                }
            }
        }
    }
    else {
        keyPress.play(0);
        //console.log("play")
    }
}

function normalizeSVGOrigin(element, offset) {
    var bounds = element.getBBox();
    if (typeof offset !== "object") {
        offset = {
            x: 0
            , y: 0
        };
    }
    /*    return (offset.x - bounds.x) + "px " + (offset.y - bounds.y) + "px";*/
    bounds.x = bounds.x + bounds.width / 2;
    bounds.y = bounds.y + bounds.height / 2;
    return bounds
}

function animateMagneticEffect() {
    var clientsSVG;
    if (!mobile) {
        clientsSVG = document.getElementById("clientHeaderSVG");
    }
    else {
        clientsSVG = document.getElementById("clientHeaderSVG_M");
    }
    var cs = clientsSVG.contentDocument;
    var NorthPole, SouthPole;
    var Waves1, Waves2;
    var t1 = new TimelineMax({
        repeat: -1
        , yoyo: true
    });
    var t2 = new TimelineMax({
        repeat: -1
        , yoyo: true
    });
    if (cs !== null) {
        var Victims = cs.getElementById('Victims');
        NorthPole = cs.getElementById('Waves1');
        SouthPole = cs.getElementById('Waves2');
        Waves1 = cs.getElementById('Waves1');
        Waves2 = cs.getElementById('Waves2');
        t1.to(Waves1, 0.2, {
            scale: "1.1"
            , ease: Linear.easeNone
            , transformOrigin: "0 50"
        })
        t2.to(Waves2, 0.2, {
            scale: "1.1"
            , ease: Linear.easeNone
            , transformOrigin: "0 50"
        })
        var i = 0.1;
        
        for (var i = 0; i < $(Victims)[0].children.length; i++) {
            var p = $(Victims)[0].children[i];
            TweenMax.set(p, {
                opacity: 1
            })
        }
        for (var i = 0; i < $(Victims)[0].children.length; i++) {
            var p = $(Victims)[0].children[i];
            makeAttract(p);
        }
    }
    else {
        console.error("clientsSVG not found.");
    }

    function makeAttract(p) {
        var time = getDistance(NorthPole, p) / 20
        var originX = normalizeSVGOrigin(p).x;
        var originY = normalizeSVGOrigin(p).y;
        var gx = normalizeSVGOrigin(findNearestPole(p)).x - normalizeSVGOrigin(p).x;
        var gy = normalizeSVGOrigin(findNearestPole(p)).y - normalizeSVGOrigin(p).y
        TweenMax.to(p, time / 1.3, {
            opacity: 1
            , ease: Power4.easeIn
        })
        TweenMax.to(p, time, {
            x: gx
            , y: gy
            , ease: Power4.easeIn
            , onComplete: function () {
                onFinish(p)
                /*setTimeout(function () {
                    TweenMax.to(p, 0.5, {
                        opacity: 0
                        , onComplete: function () {
                            onFinish(p)
                        }
                    })
                }, 10)*/
            }
        })
    }

    function onFinish(p) {
        TweenMax.set(p, {
            x: 0
            , y: 0
            , opacity: 0
        })
        makeAttract(p)
    }

    function findNearestPole(obj) {
        var nd = getDistance(NorthPole, obj)
        var sd = getDistance(SouthPole, obj)
        return nd > sd ? SouthPole : NorthPole
    }

    function getDistance(a, b) {
        a = normalizeSVGOrigin(a)
        b = normalizeSVGOrigin(b)
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    }
}

function formActions() {
    var AffairForm = $('#AffairForm');
    var TalentForm = $('#TalentForm');
    /*$("html").click(function (event) {
      
        ////console.log("event.target", event.target)
        if (!$(event.target).is('#AffairFormContent') && !$(event.target).is('#AffairFormContent *') && AffairFormVisible) {
              event.stopImmediatePropagation();
            hideAffairForm();
        }
        if (!$(event.target).is('#TalentFormContent') && !$(event.target).is('#TalentFormContent *') && TalentFormVisible) {
              event.stopImmediatePropagation();
            hideTalentForm();
        }
    });*/
    $('#AffairFormCloseButton').click(function () {
        hideAffairForm();
    })
    $('#TalentFormCloseButton').click(function () {
        hideTalentForm();
    })
    setupAffairForm();
}

function hideAffairForm() {
    if (AffairFormUnlocked) {
        AffairFormVisible = false;
        $('#AffairForm').hide();
    }
}

function hideTalentForm() {
    if (TalentFormUnlocked) {
        TalentFormVisible = false;
        $('#TalentForm').hide();
    }
}

function showAffairForm() {
    AffairFormUnlocked = false;
    setTimeout(function () {
        AffairFormUnlocked = true;
    }, 300);
    AffairFormVisible = true;
    if (mobile) {
        $('#AffairForm').css({
            'display': 'flex'
        });
        $('#AffairFormImageMobile').show()
        $('#AffairFormImageDesktop').hide()
        $('#AffairForm').show();
        /* MOBILE SIZING */
        fHxfHP = '1.5%'; //fieldHeight * fieldHeightPercentage;
        fWxfWP = '49.5%'; //fieldWidth * fieldWidthPercentage;
        $('.textBox').css('font-size', '10px')
        $('#Afield1').css('height', fHxfHP);
        $('#Afield2').css('height', fHxfHP);
        $('#Afield3').css('height', fHxfHP);
        $('#Afield4').css('height', fHxfHP);
        $('#Afield1').css('width', fWxfWP);
        $('#Afield2').css('width', fWxfWP);
        $('#Afield3').css('width', fWxfWP);
        $('#Afield4').css('width', fWxfWP);
        $("#Afield1").css('left', '8%');
        $("#Afield2").css('left', '8%');
        $("#Afield3").css('left', '8%');
        $("#Afield4").css('left', '8%');
        $("#Afield1").css('top', '35.7%');
        $("#Afield2").css('top', '49.3%');
        $("#Afield3").css('top', '62.4%');
        $("#Afield4").css('top', '75.9%');
        $('#Asubmit').css('width', '27%');
        $('#Asubmit').css('height', '5%');
        $('#Asubmit').css('left', '45%');
        $('#Asubmit').css('top', '85.7%');
    }
    else {
        $('#AffairForm').css({
            'display': 'flex'
        });
        $('#AffairFormImageMobile').hide()
        $('#AffairFormImageDesktop').show()
        $('#AffairForm').show();
        /* DESKTOP SIZING */
        fHxfHP = '1.5%'; //fieldHeight * fieldHeightPercentage;
        fWxfWP = '24.5%'; //fieldWidth * fieldWidthPercentage;
        // top :24%
        //left : 6%
        $('#Afield1').css('height', fHxfHP);
        $('#Afield2').css('height', fHxfHP);
        $('#Afield3').css('height', fHxfHP);
        $('#Afield4').css('height', fHxfHP);
        $('#Afield1').css('width', fWxfWP);
        $('#Afield2').css('width', fWxfWP);
        $('#Afield3').css('width', fWxfWP);
        $('#Afield4').css('width', fWxfWP);
        $("#Afield1").css('left', '6%');
        $("#Afield2").css('left', '6%');
        $("#Afield3").css('left', '6%');
        $("#Afield4").css('left', '6%');
        $("#Afield1").css('top', '24%');
        $("#Afield2").css('top', '41.5%');
        $("#Afield3").css('top', '58.5%');
        $("#Afield4").css('top', '75.5%');
        $('#Asubmit').css('width', '13%');
        $('#Asubmit').css('height', '6%');
        $('#Asubmit').css('left', '23%');
        $('#Asubmit').css('top', '85.5%');
    }
}

function showTalentForm() {
    TalentFormUnlocked = false;
    setTimeout(function () {
        TalentFormUnlocked = true;
    }, 300);
    TalentFormVisible = true;
    if (mobile) {
        console.log("TalentForm : mobile");
        $('#TalentForm').css({
            'display': 'flex'
        });
        $('#TalentFormImageMobile').show()
        $('#TalentFormImageDesktop').hide()
        $('#TalentForm').show();
        /* MOBILE SIZING */
        fHxfHP = '1%'; //fieldHeight * fieldHeightPercentage;
        fWxfWP = '49.5%'; //fieldWidth * fieldWidthPercentage;
        $('.textBox').css('font-size', '10px')
        $('#Tfield1').css('height', fHxfHP);
        $('#Tfield2').css('height', fHxfHP);
        $('#Tfield3').css('height', fHxfHP);
        $('#Tfield4').css('height', fHxfHP);
        $('#Tfield5').css('height', fHxfHP);
        $('#Tfield1').css('width', fWxfWP);
        $('#Tfield2').css('width', fWxfWP);
        $('#Tfield3').css('width', fWxfWP);
        $('#Tfield4').css('width', '44%');
        $('#Tfield5').css('width', fWxfWP);
        $("#Tfield1").css('left', '10%');
        $("#Tfield2").css('left', '10%');
        $("#Tfield3").css('left', '10%');
        $("#Tfield4").css('left', '10%');
        $("#Tfield5").css('left', '10%');
        $("#Tfield1").css('top', '32.5%');
        $("#Tfield2").css('top', '45.2%');
        $("#Tfield3").css('top', '57.5%');
        $("#Tfield4").css('top', '69.5%');
        $("#Tfield5").css('top', '81.5%');
        $('#Tsubmit').css('width', '27%');
        $('#Tsubmit').css('height', '6%');
        $('#Tsubmit').css('left', '46%');
        $('#Tsubmit').css('top', '88.5%');
        $('#Tattach').css('width', '27%');
        $('#Tattach').css('height', '6%');
        $('#Tattach').css('left', '68%');
        $('#Tattach').css('top', '70%');
    }
    else {
        // console.log("TalentForm : desktop");
        $('#TalentForm').css({
            'display': 'flex'
        });
        $('#TalentFormImageMobile').hide()
        $('#TalentFormImageDesktop').show()
        $('#TalentForm').show();
        /* DESKTOP SIZING */
        fHxfHP = '1.5%'; //fieldHeight * fieldHeightPercentage;
        fWxfWP = '25%'; //fieldWidth * fieldWidthPercentage;
        // top :24%
        //left : 6%
        $('#Tfield1').css('height', fHxfHP);
        $('#Tfield2').css('height', fHxfHP);
        $('#Tfield3').css('height', fHxfHP);
        $('#Tfield4').css('height', fHxfHP);
        $('#Tfield5').css('height', fHxfHP);
        $('#Tfield1').css('width', fWxfWP);
        $('#Tfield2').css('width', fWxfWP);
        $('#Tfield3').css('width', fWxfWP);
        $('#Tfield4').css('width', '23%');
        $('#Tfield5').css('width', fWxfWP);
        $("#Tfield1").css('left', '6%');
        $("#Tfield2").css('left', '6%');
        $("#Tfield3").css('left', '6%');
        $("#Tfield4").css('left', '6%');
        $("#Tfield5").css('left', '6%');
        $("#Tfield1").css('top', '17%');
        $("#Tfield2").css('top', '33.5%');
        $("#Tfield3").css('top', '49.2%');
        $("#Tfield4").css('top', '64.7%');
        $("#Tfield5").css('top', '80%');
        $('#Tsubmit').css('width', '13%');
        $('#Tsubmit').css('height', '6%');
        $('#Tsubmit').css('left', '23%');
        $('#Tsubmit').css('top', '88.5%');
        $('#Tattach').css('width', '13%');
        $('#Tattach').css('height', '6%');
        $('#Tattach').css('left', '34%');
        $('#Tattach').css('top', '65%');
        $('#hiddenAttachButton').css('width', '13%');
        $('#hiddenAttachButton').css('height', '12%');
        $('#hiddenAttachButton').css('left', '34%');
        $('#hiddenAttachButton').css('top', '61%');
    }
    /*    $('#Tattach').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('#hiddenAttachButton').click();
        });
        $("#hiddenAttachButton").click(function (event) {
            event.stopPropagation();
        });*/
}

function fileSelect(event) {
    var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
    $('#Tfield4').attr("value", filename);
}

function setupFileUploadEvents() {
    $('#hiddenAttachButton').bind('change', function () {
        if (this.files[0].size > 2 * 1024 * 1024) {
            lastError = "ERROR : File size should be less than 2MB.";
            toast(lastError, 3);
            uploadFileSelected = false;
            //$("#hiddenAttachButton").val("")
            $("#hiddenAttachButton").replaceWith($("#hiddenAttachButton").clone());
            $('#Tfield4').attr("value", "");
            setupFileUploadEvents();
        }
        else {
            var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
            $('#Tfield4').attr("value", filename);
            uploadFileSelected = true;
            toast("File attached");
        }
    });
}

function setupAffairForm() {
    setupFileUploadEvents();
    var request;
    $("#Affair").submit(function (event) {
        if (request) {
            request.abort();
        }
        event.preventDefault();
        if ($('#Afield1').val().length === 0 || $('#Afield2').val().length === 0 || $('#Afield3').val().length === 0 || $('#Afield4').val().length === 0) {
            noError = false;
            toast("ERROR : Please fill out all the fields.", 2);
        }
        else {
            noError = true;
            //  toast("Good to go", 2);
        }
        if (noError) {
            toast("Submitting Form...", 100);
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var serializedData = $form.serialize();
            $inputs.prop("disabled", true);
            // Fire off the request to /form.php
            request = $.ajax({
                url: backendFormSubmitPath
                , type: "post"
                , data: serializedData
            });
            // Callback handler that will be called on success
            request.done(function (response, textStatus, jqXHR) {
                // Log a message to the console
                if (response.indexOf("{{{200}}}") >= 0) {
                    toast("Thank you! Form successfully submitted.", 3);
                    hideAffairForm();
                }
                else if (response.indexOf("{{{888}}}")) {
                    toast("There was some problem submitting the form. (ERROR CODE : 888)", 5);
                    console.log("888 : ", response);
                }
                else {
                    toast("There was some problem submitting the form. (ERROR CODE : 344)", 5);
                    console.log("344 : ", response);
                }
                //console.log("textStatus : ", textStatus);
                //console.log("response : ", response);
            });
            // Callback handler that will be called on failure
            request.fail(function (jqXHR, textStatus, errorThrown) {
                // Log the error to the console
                toast("Could not submit the form. (ERROR CODE : 533)", 5);
            });
            // Callback handler that will be called regardless
            // if the request failed or succeeded
            request.always(function () {
                // Reenable the inputs
                $inputs.prop("disabled", false);
            });
            // Prevent default posting of form
            event.preventDefault();
        }
    });
    $("#Talent").submit(function (event) {
        if (request) {
            request.abort();
        }
        event.preventDefault();
        if (uploadFileSelected == false) {
            toast("ERROR : Please attach the document.", 2);
            noError = false;
        }
        else if ($('#Tfield1').val().length === 0 || $('#Tfield2').val().length === 0 || $('#Tfield3').val().length === 0 || $('#Tfield5').val().length === 0) {
            noError = false;
            toast("ERROR : Please fill out all the fields.", 2);
        }
        else {
            noError = true;
            // toast("Good to go", 2);
        }
        if (noError) {
            toast("Submitting Form...", 100);
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var formData = new FormData($("#Talent")[0]);
            //var file_data = $('#hiddenAttachButton').prop('files')[0];
            //var serializedData = $form.serialize();
            //$form.append('file', file_data);
            $inputs.prop("disabled", true);
            // Fire off the request to /form.php
            request = $.ajax({
                url: backendFormSubmitPath
                , type: "post"
                , data: formData
                , cache: false
                , contentType: false
                , processData: false
            });
            // Callback handler that will be called on success
            request.done(function (response, textStatus, jqXHR) {
                // Log a message to the console
                if (response.indexOf("{{{200}}}") >= 0) {
                    toast("Thank you! Form successfully submitted.", 3);
                    hideTalentForm();
                }
                else if (response.indexOf("{{{888}}}")) {
                    toast("There was some problem submitting the form. (ERROR CODE : 888)", 5);
                    console.log("888 : ", response);
                }
                else {
                    toast("There was some problem submitting the form. (ERROR CODE : 344)", 5);
                    console.log("344 : ", response);
                }
                // toast(textStatus,3);
                //    console.log("textStatus : ", textStatus);
                //    console.log("response : ", response);
            });
            // Callback handler that will be called on failure
            request.fail(function (jqXHR, textStatus, errorThrown) {
                // Log the error to the console
                toast("Could not submit the form. (ERROR CODE : 533)", 5);
                console.error("The following error occurred: " + textStatus, errorThrown);
            });
            // Callback handler that will be called regardless
            // if the request failed or succeeded
            request.always(function () {
                // Reenable the inputs
                $inputs.prop("disabled", false);
            });
            // Prevent default posting of form
            event.preventDefault();
        }
    });
}

function submitTalentForm() {}

function toast(message, seconds) {
    var messageBar = $('#messageBar');
    var toastMessage = $('#toastMessage');
    toastTimeline.pause(0);
    toastTimeline.clear();
    toastTimeline = new TimelineMax();
    toastMessage.text(message);
    seconds = seconds == undefined ? 1 : seconds;
    appearIn(seconds);

    function appearIn(staySeconds) {
        messageBar.css('display', 'flex');
        toastTimeline.to(messageBar, 0.5, {
            opacity: 1
        })
        toastTimeline.to(messageBar, staySeconds, {
            onComplete: fadeOut
        });
    }

    function fadeOut() {
        toastTimeline.to(messageBar, 1, {
            opacity: 0
            , onComplete: function () {
                messageBar.hide();
            }
        })
    }
}