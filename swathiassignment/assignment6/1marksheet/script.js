// Event Listener
const submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', (e)=>{
	// prevent the default action of action button
	e.preventDefault();

	// grab the marks
	const english = parseInt(document.querySelector('#english').value)
	const hindi = parseInt(document.querySelector('#hindi').value)
	const math = parseInt(document.querySelector('#math').value)
	const phy = parseInt(document.querySelector('#phy').value)
	const chem = parseInt(document.querySelector('#chem').value)

	// total marks 
	const totalMarks = document.querySelector('.total-marks').textContent = english+hindi+math+phy+chem

	// find grade
	const grade = document.querySelector('.grade').textContent = findGrade(totalMarks)

	// percentage
	const percentage = document.querySelector('.percentage').textContent = totalMarks / 5 + '%'

	document.querySelector('.marks-container').style.visibility = 'hidden'
	document.querySelector('.result-container').style.visibility = 'visible'	
})


// find the grade

function findGrade(marks) {
	if(marks <= 500 && marks > 450) return '"You scored grade A - Congratulations"'
	else if(marks <= 450 && marks > 300 ) return '"You scored grade B - Good Job"'
	else if(marks <= 300 && marks > 250) return '"You scored grade C - You can do better"'
	else if(marks <= 250) return '"Need to Work Hard"'
}









