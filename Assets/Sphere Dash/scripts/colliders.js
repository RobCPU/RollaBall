#pragma strict

function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
//	 print("Hey you hit me")
	Destroy(this.gameObject);
	 }
}