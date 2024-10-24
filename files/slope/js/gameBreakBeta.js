window.adsbygoogle = window.adsbygoogle || [];
const adBreak = adConfig = function(o) {adsbygoogle.push(o);}
adConfig({
    preloadAdBreaks: 'off',
    sound: 'on', // This game has sound
    onReady: () => {
        console.log("ready");
    }, // Called when API has initialised and adBreak() is ready
});
function showNextAd()
{
    console.log("showNextAd")
    adBreak({
        type: 'next', // ad shows at start of next level
        name: 'next-game',
        beforeAd: () => {            
            console.log("beforeAd")
            passBeforeAdData()
        }, // You may also want to mute thegame's sound.
        afterAd: () => {
            console.log("afterAd")
        }, // resume the game flow.
        adBreakDone: (placementInfo) => {
            console.log("adBreak complete ");
            adBreakDoneData()
            console.log(placementInfo.breakType);
            console.log(placementInfo.breakName);
            console.log(placementInfo.breakFormat);
            console.log(placementInfo.breakStatus);
        },
    });
}

function passBeforeAdData()
{
    myGameInstance.SendMessage('Canvas', 'pauseGame');
}

function adBreakDoneData()
{
    myGameInstance.SendMessage('Canvas', 'resumeGame');
}
