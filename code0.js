gdjs.mainCode = {};
gdjs.mainCode.GDplayerObjects1= [];
gdjs.mainCode.GDplayerObjects2= [];
gdjs.mainCode.GDplayerObjects3= [];
gdjs.mainCode.GDthrouGroundObjects1= [];
gdjs.mainCode.GDthrouGroundObjects2= [];
gdjs.mainCode.GDthrouGroundObjects3= [];
gdjs.mainCode.GDgroundObjects1= [];
gdjs.mainCode.GDgroundObjects2= [];
gdjs.mainCode.GDgroundObjects3= [];
gdjs.mainCode.GDreddoorObjects1= [];
gdjs.mainCode.GDreddoorObjects2= [];
gdjs.mainCode.GDreddoorObjects3= [];
gdjs.mainCode.GDbooksObjects1= [];
gdjs.mainCode.GDbooksObjects2= [];
gdjs.mainCode.GDbooksObjects3= [];
gdjs.mainCode.GDground2Objects1= [];
gdjs.mainCode.GDground2Objects2= [];
gdjs.mainCode.GDground2Objects3= [];
gdjs.mainCode.GDcoinObjects1= [];
gdjs.mainCode.GDcoinObjects2= [];
gdjs.mainCode.GDcoinObjects3= [];
gdjs.mainCode.GDstairObjects1= [];
gdjs.mainCode.GDstairObjects2= [];
gdjs.mainCode.GDstairObjects3= [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDbackgroundObjects3= [];
gdjs.mainCode.GDjumpBttObjects1= [];
gdjs.mainCode.GDjumpBttObjects2= [];
gdjs.mainCode.GDjumpBttObjects3= [];
gdjs.mainCode.GDLeftBttObjects1= [];
gdjs.mainCode.GDLeftBttObjects2= [];
gdjs.mainCode.GDLeftBttObjects3= [];
gdjs.mainCode.GDRightBttObjects1= [];
gdjs.mainCode.GDRightBttObjects2= [];
gdjs.mainCode.GDRightBttObjects3= [];
gdjs.mainCode.GDscoreObjects1= [];
gdjs.mainCode.GDscoreObjects2= [];
gdjs.mainCode.GDscoreObjects3= [];
gdjs.mainCode.GDtestObjects1= [];
gdjs.mainCode.GDtestObjects2= [];
gdjs.mainCode.GDtestObjects3= [];
gdjs.mainCode.GDplateScoreObjects1= [];
gdjs.mainCode.GDplateScoreObjects2= [];
gdjs.mainCode.GDplateScoreObjects3= [];
gdjs.mainCode.GDbuttonTObjects1= [];
gdjs.mainCode.GDbuttonTObjects2= [];
gdjs.mainCode.GDbuttonTObjects3= [];
gdjs.mainCode.GDground3Objects1= [];
gdjs.mainCode.GDground3Objects2= [];
gdjs.mainCode.GDground3Objects3= [];
gdjs.mainCode.GDground4Objects1= [];
gdjs.mainCode.GDground4Objects2= [];
gdjs.mainCode.GDground4Objects3= [];
gdjs.mainCode.GDstairsObjects1= [];
gdjs.mainCode.GDstairsObjects2= [];
gdjs.mainCode.GDstairsObjects3= [];
gdjs.mainCode.GDStairsBttObjects1= [];
gdjs.mainCode.GDStairsBttObjects2= [];
gdjs.mainCode.GDStairsBttObjects3= [];
gdjs.mainCode.GDyellowstairsObjects1= [];
gdjs.mainCode.GDyellowstairsObjects2= [];
gdjs.mainCode.GDyellowstairsObjects3= [];
gdjs.mainCode.GDCV2Objects1= [];
gdjs.mainCode.GDCV2Objects2= [];
gdjs.mainCode.GDCV2Objects3= [];
gdjs.mainCode.GDdoorenterObjects1= [];
gdjs.mainCode.GDdoorenterObjects2= [];
gdjs.mainCode.GDdoorenterObjects3= [];
gdjs.mainCode.GDpathObjects1= [];
gdjs.mainCode.GDpathObjects2= [];
gdjs.mainCode.GDpathObjects3= [];
gdjs.mainCode.GDHitboxObjects1= [];
gdjs.mainCode.GDHitboxObjects2= [];
gdjs.mainCode.GDHitboxObjects3= [];
gdjs.mainCode.GDNojumpAreaObjects1= [];
gdjs.mainCode.GDNojumpAreaObjects2= [];
gdjs.mainCode.GDNojumpAreaObjects3= [];
gdjs.mainCode.GDFollowCameraObjects1= [];
gdjs.mainCode.GDFollowCameraObjects2= [];
gdjs.mainCode.GDFollowCameraObjects3= [];
gdjs.mainCode.GDEXITObjects1= [];
gdjs.mainCode.GDEXITObjects2= [];
gdjs.mainCode.GDEXITObjects3= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDStairsBttObjects2Objects = Hashtable.newFrom({"StairsBtt": gdjs.mainCode.GDStairsBttObjects2});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDStairsBttObjects1Objects = Hashtable.newFrom({"StairsBtt": gdjs.mainCode.GDStairsBttObjects1});gdjs.mainCode.eventsList0x75b0ac = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects2.createFrom(gdjs.mainCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].setAnimationName("UpStairs");
}
}}

}


{

gdjs.mainCode.GDStairsBttObjects2.createFrom(runtimeScene.getObjects("StairsBtt"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDStairsBttObjects2Objects, runtimeScene, true, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects2.createFrom(gdjs.mainCode.GDplayerObjects1);

{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].setAnimationName("UpStairs");
}
}}

}


{

gdjs.mainCode.GDStairsBttObjects1.createFrom(runtimeScene.getObjects("StairsBtt"));

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDStairsBttObjects1Objects, runtimeScene, true, true);
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].setAnimation(6);
}
}}

}


}; //End of gdjs.mainCode.eventsList0x75b0ac
gdjs.mainCode.eventsList0x708f84 = function(runtimeScene) {

{

gdjs.mainCode.GDplayerObjects2.createFrom(gdjs.mainCode.GDplayerObjects1);


gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects2[k] = gdjs.mainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects2.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.mainCode.GDplayerObjects1 */

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].setAnimationName("run");
}
}}

}


}; //End of gdjs.mainCode.eventsList0x708f84
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDCV2Objects1Objects = Hashtable.newFrom({"CV2": gdjs.mainCode.GDCV2Objects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNojumpAreaObjects1Objects = Hashtable.newFrom({"NojumpArea": gdjs.mainCode.GDNojumpAreaObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDLeftBttObjects1Objects = Hashtable.newFrom({"LeftBtt": gdjs.mainCode.GDLeftBttObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDRightBttObjects1Objects = Hashtable.newFrom({"RightBtt": gdjs.mainCode.GDRightBttObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDjumpBttObjects1Objects = Hashtable.newFrom({"jumpBtt": gdjs.mainCode.GDjumpBttObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNojumpAreaObjects1Objects = Hashtable.newFrom({"NojumpArea": gdjs.mainCode.GDNojumpAreaObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.mainCode.GDcoinObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdoorenterObjects1Objects = Hashtable.newFrom({"doorenter": gdjs.mainCode.GDdoorenterObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects2});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDreddoorObjects2Objects = Hashtable.newFrom({"reddoor": gdjs.mainCode.GDreddoorObjects2});gdjs.mainCode.eventsList0x72fec4 = function(runtimeScene) {

{

gdjs.mainCode.GDplayerObjects2.createFrom(gdjs.mainCode.GDplayerObjects1);

gdjs.mainCode.GDreddoorObjects2.createFrom(runtimeScene.getObjects("reddoor"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects2Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDreddoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDreddoorObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDreddoorObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDreddoorObjects2[i].setAnimation(1);
}
}}

}


}; //End of gdjs.mainCode.eventsList0x72fec4
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDtestObjects1Objects = Hashtable.newFrom({"test": gdjs.mainCode.GDtestObjects1});gdjs.mainCode.eventsList0x72fc8c = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDdoorenterObjects2.createFrom(gdjs.mainCode.GDdoorenterObjects1);

{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "quest1");
}{for(var i = 0, len = gdjs.mainCode.GDdoorenterObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDdoorenterObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.mainCode.eventsList0x72fec4(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.mainCode.GDtestObjects1 */

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDtestObjects1Objects, runtimeScene, true, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "quest1");
}}

}


}; //End of gdjs.mainCode.eventsList0x72fc8c
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdoorenterObjects1Objects = Hashtable.newFrom({"doorenter": gdjs.mainCode.GDdoorenterObjects1});gdjs.mainCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDCV2Objects1.createFrom(runtimeScene.getObjects("CV2"));
gdjs.mainCode.GDHitboxObjects1.createFrom(runtimeScene.getObjects("Hitbox"));
gdjs.mainCode.GDNojumpAreaObjects1.createFrom(runtimeScene.getObjects("NojumpArea"));
gdjs.mainCode.GDdoorenterObjects1.createFrom(runtimeScene.getObjects("doorenter"));
gdjs.mainCode.GDpathObjects1.createFrom(runtimeScene.getObjects("path"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.mainCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.mainCode.GDdoorenterObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdoorenterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDtestObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtestObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDCV2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDCV2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDHitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDpathObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDpathObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDNojumpAreaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDNojumpAreaObjects1[i].hide();
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) + 100, "", 0);
}}

}


{


{
gdjs.mainCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
{for(var i = 0, len = gdjs.mainCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcoinObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.mainCode.GDHitboxObjects1.createFrom(runtimeScene.getObjects("Hitbox"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mainCode.GDHitboxObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDHitboxObjects1[i].setPosition((( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) + 15,(( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointY("")) + 20);
}
}}

}


{

gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].setAnimationName("fall");
}
}}

}


{

gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.mainCode.eventsList0x75b0ac(runtimeScene);} //End of subevents
}

}


{

gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.mainCode.eventsList0x708f84(runtimeScene);} //End of subevents
}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) - 100, "", 0);
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].flipX(false);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) + 100, "", 0);
}}

}


{


{
}

}


{



}


{

gdjs.mainCode.GDCV2Objects1.createFrom(runtimeScene.getObjects("CV2"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDCV2Objects1Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 50, "", 0);
}}

}


{

gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getY() > 200 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}}

}


{

gdjs.mainCode.GDNojumpAreaObjects1.createFrom(runtimeScene.getObjects("NojumpArea"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNojumpAreaObjects1Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointY("")), "", 0);
}}

}


{



}


{

gdjs.mainCode.GDLeftBttObjects1.createFrom(runtimeScene.getObjects("LeftBtt"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDLeftBttObjects1Objects, runtimeScene, true, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) - 100, "", 0);
}}

}


{

gdjs.mainCode.GDRightBttObjects1.createFrom(runtimeScene.getObjects("RightBtt"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDRightBttObjects1Objects, runtimeScene, true, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].flipX(false);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("")) + 100, "", 0);
}}

}


{

gdjs.mainCode.GDNojumpAreaObjects1.createFrom(runtimeScene.getObjects("NojumpArea"));
gdjs.mainCode.GDjumpBttObjects1.createFrom(runtimeScene.getObjects("jumpBtt"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDjumpBttObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNojumpAreaObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{



}


{



}


{

gdjs.mainCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("score").add(10);
}}

}


{



}


{



}


{



}


{

gdjs.mainCode.GDdoorenterObjects1.createFrom(runtimeScene.getObjects("doorenter"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdoorenterObjects1Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDbuttonTObjects1.createFrom(runtimeScene.getObjects("buttonT"));
gdjs.mainCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));
{for(var i = 0, len = gdjs.mainCode.GDtestObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtestObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbuttonTObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbuttonTObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.mainCode.eventsList0x72fc8c(runtimeScene);} //End of subevents
}

}


{

gdjs.mainCode.GDdoorenterObjects1.createFrom(runtimeScene.getObjects("doorenter"));
gdjs.mainCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdoorenterObjects1Objects, true, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDbuttonTObjects1.createFrom(runtimeScene.getObjects("buttonT"));
gdjs.mainCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));
{for(var i = 0, len = gdjs.mainCode.GDtestObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtestObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDbuttonTObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbuttonTObjects1[i].hide();
}
}}

}


{



}


{



}


{


{
gdjs.mainCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.mainCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDscoreObjects1[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score"))));
}
}}

}


{


{
}

}


}; //End of gdjs.mainCode.eventsList0xb5aa0


gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDplayerObjects3.length = 0;
gdjs.mainCode.GDthrouGroundObjects1.length = 0;
gdjs.mainCode.GDthrouGroundObjects2.length = 0;
gdjs.mainCode.GDthrouGroundObjects3.length = 0;
gdjs.mainCode.GDgroundObjects1.length = 0;
gdjs.mainCode.GDgroundObjects2.length = 0;
gdjs.mainCode.GDgroundObjects3.length = 0;
gdjs.mainCode.GDreddoorObjects1.length = 0;
gdjs.mainCode.GDreddoorObjects2.length = 0;
gdjs.mainCode.GDreddoorObjects3.length = 0;
gdjs.mainCode.GDbooksObjects1.length = 0;
gdjs.mainCode.GDbooksObjects2.length = 0;
gdjs.mainCode.GDbooksObjects3.length = 0;
gdjs.mainCode.GDground2Objects1.length = 0;
gdjs.mainCode.GDground2Objects2.length = 0;
gdjs.mainCode.GDground2Objects3.length = 0;
gdjs.mainCode.GDcoinObjects1.length = 0;
gdjs.mainCode.GDcoinObjects2.length = 0;
gdjs.mainCode.GDcoinObjects3.length = 0;
gdjs.mainCode.GDstairObjects1.length = 0;
gdjs.mainCode.GDstairObjects2.length = 0;
gdjs.mainCode.GDstairObjects3.length = 0;
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDbackgroundObjects3.length = 0;
gdjs.mainCode.GDjumpBttObjects1.length = 0;
gdjs.mainCode.GDjumpBttObjects2.length = 0;
gdjs.mainCode.GDjumpBttObjects3.length = 0;
gdjs.mainCode.GDLeftBttObjects1.length = 0;
gdjs.mainCode.GDLeftBttObjects2.length = 0;
gdjs.mainCode.GDLeftBttObjects3.length = 0;
gdjs.mainCode.GDRightBttObjects1.length = 0;
gdjs.mainCode.GDRightBttObjects2.length = 0;
gdjs.mainCode.GDRightBttObjects3.length = 0;
gdjs.mainCode.GDscoreObjects1.length = 0;
gdjs.mainCode.GDscoreObjects2.length = 0;
gdjs.mainCode.GDscoreObjects3.length = 0;
gdjs.mainCode.GDtestObjects1.length = 0;
gdjs.mainCode.GDtestObjects2.length = 0;
gdjs.mainCode.GDtestObjects3.length = 0;
gdjs.mainCode.GDplateScoreObjects1.length = 0;
gdjs.mainCode.GDplateScoreObjects2.length = 0;
gdjs.mainCode.GDplateScoreObjects3.length = 0;
gdjs.mainCode.GDbuttonTObjects1.length = 0;
gdjs.mainCode.GDbuttonTObjects2.length = 0;
gdjs.mainCode.GDbuttonTObjects3.length = 0;
gdjs.mainCode.GDground3Objects1.length = 0;
gdjs.mainCode.GDground3Objects2.length = 0;
gdjs.mainCode.GDground3Objects3.length = 0;
gdjs.mainCode.GDground4Objects1.length = 0;
gdjs.mainCode.GDground4Objects2.length = 0;
gdjs.mainCode.GDground4Objects3.length = 0;
gdjs.mainCode.GDstairsObjects1.length = 0;
gdjs.mainCode.GDstairsObjects2.length = 0;
gdjs.mainCode.GDstairsObjects3.length = 0;
gdjs.mainCode.GDStairsBttObjects1.length = 0;
gdjs.mainCode.GDStairsBttObjects2.length = 0;
gdjs.mainCode.GDStairsBttObjects3.length = 0;
gdjs.mainCode.GDyellowstairsObjects1.length = 0;
gdjs.mainCode.GDyellowstairsObjects2.length = 0;
gdjs.mainCode.GDyellowstairsObjects3.length = 0;
gdjs.mainCode.GDCV2Objects1.length = 0;
gdjs.mainCode.GDCV2Objects2.length = 0;
gdjs.mainCode.GDCV2Objects3.length = 0;
gdjs.mainCode.GDdoorenterObjects1.length = 0;
gdjs.mainCode.GDdoorenterObjects2.length = 0;
gdjs.mainCode.GDdoorenterObjects3.length = 0;
gdjs.mainCode.GDpathObjects1.length = 0;
gdjs.mainCode.GDpathObjects2.length = 0;
gdjs.mainCode.GDpathObjects3.length = 0;
gdjs.mainCode.GDHitboxObjects1.length = 0;
gdjs.mainCode.GDHitboxObjects2.length = 0;
gdjs.mainCode.GDHitboxObjects3.length = 0;
gdjs.mainCode.GDNojumpAreaObjects1.length = 0;
gdjs.mainCode.GDNojumpAreaObjects2.length = 0;
gdjs.mainCode.GDNojumpAreaObjects3.length = 0;
gdjs.mainCode.GDFollowCameraObjects1.length = 0;
gdjs.mainCode.GDFollowCameraObjects2.length = 0;
gdjs.mainCode.GDFollowCameraObjects3.length = 0;
gdjs.mainCode.GDEXITObjects1.length = 0;
gdjs.mainCode.GDEXITObjects2.length = 0;
gdjs.mainCode.GDEXITObjects3.length = 0;

gdjs.mainCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['mainCode'] = gdjs.mainCode;
