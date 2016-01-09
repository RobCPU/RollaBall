#pragma strict

var playerSpeed: float;

function Start () 
{
	
}
 
function Update () 
{

	if (Input.GetKey(KeyCode.UpArrow))
	{
	 GetComponent(Rigidbody).AddForce(Vector3(0,0,1) * 5);	
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
	 GetComponent(Rigidbody).AddForce(Vector3(0,0,-1) * 5);	
	}
	
	
	if (Input.GetKey(KeyCode.RightArrow))
	{
	 GetComponent(Rigidbody).AddForce(Vector3(1,0,0) * 5);	
	}
	
	if (Input.GetKey(KeyCode.LeftArrow))
	{
	 GetComponent(Rigidbody).AddForce(Vector3(-1,0,0) * 5);	
	}
}