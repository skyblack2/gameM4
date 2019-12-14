gdjs.quest1Code = {};
gdjs.quest1Code.GDsssObjects1= [];
gdjs.quest1Code.GDsssObjects2= [];
gdjs.quest1Code.GDans1Objects1= [];
gdjs.quest1Code.GDans1Objects2= [];

gdjs.quest1Code.conditionTrue_0 = {val:false};
gdjs.quest1Code.condition0IsTrue_0 = {val:false};
gdjs.quest1Code.condition1IsTrue_0 = {val:false};


gdjs.quest1Code.mapOfGDgdjs_46quest1Code_46GDsssObjects1Objects = Hashtable.newFrom({"sss": gdjs.quest1Code.GDsssObjects1});gdjs.quest1Code.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs.quest1Code.GDsssObjects1.createFrom(runtimeScene.getObjects("sss"));

gdjs.quest1Code.condition0IsTrue_0.val = false;
{
gdjs.quest1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.quest1Code.mapOfGDgdjs_46quest1Code_46GDsssObjects1Objects, runtimeScene, true, false);
}if (gdjs.quest1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.quest1Code.eventsList0xb5aa0


gdjs.quest1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.quest1Code.GDsssObjects1.length = 0;
gdjs.quest1Code.GDsssObjects2.length = 0;
gdjs.quest1Code.GDans1Objects1.length = 0;
gdjs.quest1Code.GDans1Objects2.length = 0;

gdjs.quest1Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['quest1Code'] = gdjs.quest1Code;
