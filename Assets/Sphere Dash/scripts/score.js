#pragma strict
import UnityEngine.UI;

var playerScore : int;
var prizeText: Text;
var winScreen: GameObject;

function Update(){
	prizeText.text = playerScore.ToString("0");
	
//	transform.Rotate(Vector3(2,0,2) * 2);
}

function OnTriggerEnter(other : Collider){
	
	if(other.tag == "prize"){
	playerScore++;
	Destroy(other.gameObject);
}
}

function OnCollisionEnter(theCollision: Collision){
		if(theCollision.transform.tag == "win"){
		winScreen.SetActive(true);
}
}