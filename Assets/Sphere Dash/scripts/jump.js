#pragma strict

var onGround: boolean;
var playerJump : float;	

function Update() 
{
	if (Input.GetKey(KeyCode.Space) && onGround == true)
	{
	GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump);	
	}
	
	}


function OnCollisionEnter (theCollision: Collision) 
{
	if(theCollision.transform.tag == "floor")
	{
		onGround = true;
	}
	
	if(theCollision.transform.tag == "bounce")

	{
	print("Bounce");
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 3);
	}
}

function OnCollisionExit (theCollison: Collision)
{
	if(theCollison.transform.tag == "floor")
	{
		onGround = false;
	}
}
