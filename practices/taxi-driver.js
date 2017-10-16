'use strict';
/*********summary************
说明：1、发现一个答案可能的错误，test2中车003应该属于待报废提醒中
****************************/

/* #1 根据输入的信息，以“\n”为分隔符，用数组保存
 * 输入：inputs:String
 * 处理：getStrArr()
 * 输出：StrArr:[String]
 */
function getStrArr(inputs){
    let StrArr=[];
         
    let temp=inputs.split("\n");
        
    if(temp.length>1){
		for(let item of temp){
			StrArr.push(item);
		}	
   
    }     

    return StrArr;
}
/* #2 根据输入年月日String，得到年月日Num，用数组保存
 * 输入：TimeString:String
 * 处理：getTimeArr()
 * 输出：TimeArr:[year,month,day]
 */
function getTimeArr(TimeString){
									
    let TimeArr=TimeString.split("/");
	let temp=TimeArr[0];
	TimeArr[0]=parseInt(temp);
	temp=TimeArr[1];
	TimeArr[1]=parseInt(temp);
	temp=TimeArr[2];
	TimeArr[2]=parseInt(temp);
	return TimeArr;
}

/* #3 根据StrArr:[String]，得到submit当前年月日,用对象保存
 * 输入：StrArr:[String]
 * 处理：getTimeNowObj()
 * 输出：TimeNowObj:{year,month,day}
 */
function getTimeNowObj(StrArr){
	let TimeNowObj={};
	
	//StrArr first item contains info for TimeNow.								
    let temp=StrArr[0].split(": "); 		
    let TimeNowArr=getTimeArr(temp[1]);
	//StrArr first item contains info for TimeNow.	 
    
	if(TimeNowArr.length>1){
		TimeNowObj.year=TimeNowArr[0];//year.
		TimeNowObj.month=TimeNowArr[1];//month.   
		TimeNowObj.day=TimeNowArr[2];//day.   
    }

	return TimeNowObj;
}

/* #4 根据StrArr:[String]，得到车的信息：每个车信息用对象保存，所有车放在一个数组里保存
 * 输入：StrArr:[String]
 * 处理：getCarsArr()
 * 输出：CarsArr:[CarInfoObj],CarInfoObj{CarPlateNum,TimeBuyingCar,brand,kilo,AmendJudge,year,month,day}
 */
function getCarsArr(StrArr){

	let CarsArr=[];
	let times=0;

	for(let item of StrArr){
		if(times>0)	//first item is info for TimeNow(when times==0),thus ignored.
		{
			let CarInfoArr=item.split("|");
			let CarInfoObj={};
			CarInfoObj.CarPlateNum=CarInfoArr[0];
			CarInfoObj.TimeBuyingCar=CarInfoArr[1];
			let TimeArr=getTimeArr(CarInfoObj.TimeBuyingCar);
			CarInfoObj.year=TimeArr[0];
			CarInfoObj.month=TimeArr[1];
			CarInfoObj.day=TimeArr[2];

			CarInfoObj.brand=CarInfoArr[2];
			CarInfoObj.kilo=CarInfoArr[3];
			CarInfoObj.AmendJudge=CarInfoArr[4];
			
			CarsArr.push(CarInfoObj);
		}	
		
		times++;		
	}
	//TESTING LINE//console.log(CarsArr);

	return CarsArr;
}


/* #5 根据CarsArr:[]检查哪些车需要一万公里保养提醒
 * 输入：CarsArr:[{},...]
 * 处理：checkDisMaintenanceCarsArr()
 * 输出：DisMaintenanceCarsArr:[{}]
 * 说明：优先级bigger than 定期保养，报废提醒甚至报废车辆都不应该在这里出现，需要后面函数进行处理
 *	    这里当天保养当天也做了提醒 ，满足题目要求
 */
function checkDisMaintenanceCarsArr(CarsArr){
	let DisMaintenanceCarsArr=[];


	for(let car of CarsArr){
		if( ((parseInt(car.kilo)%10000)==0)||((parseInt(car.kilo)%10000)>=9500) ){
			DisMaintenanceCarsArr.push(car);

		}
	}
	//TESTING LINE//console.log('\nDisMaintenanceCars:\n');
	//TESTING LINE//console.log(DisMaintenanceCarsArr);

	return DisMaintenanceCarsArr;

}
/* #6 根据CarsArr:[]，TimeNowObj:{}检查哪些车需要定期保养提醒
 * 输入：CarsArr:[{}],TimeNowObj:{year,month,day}
 * 处理：checkTimeMaintenanceCarsArr()
 * 输出：TimeMaintenanceCarsArr:[{}]
 * 说明：定期保养优先级最低，距离提醒和报废提醒甚至报废车辆都不应该在这里出现，需要后面函数进行处理
 *	    这里当天保养当天也做了提醒 ，使得和一万里提醒保持一致
 */
function checkTimeMaintenanceCarsArr(CarsArr,TimeNowObj){
	let TimeMaintenanceCarsArr=[];


	for(let car of CarsArr){
		let years=TimeNowObj.year-car.year;				 	//this many years passed.										 
		let months=years*12+TimeNowObj.month-car.month;		//this many months passed.
		//TESTING LINE//console.log('\n'+years+' and '+months+'\n');
		if(car.AmendJudge=="T"){
										 
			if( (months%3==0)||(months%3>=2) )		 		//big amend record.
				TimeMaintenanceCarsArr.push(car);
		}

		else{
			if(years>=3)         					 		//no big amend record, and more than 3(includes) years.
			{

				if((months%6==0)||(months%6>=5)) TimeMaintenanceCarsArr.push(car);		
					
			}
			else									 		//no big amend record, and less than 3 years.
			{
				if((months%12==0)||(months%12>=11))	TimeMaintenanceCarsArr.push(car);		
						
			}

		}

	}
	//TESTING LINE//console.log('\nTimeMaintenanceCars:\n');
	//TESTING LINE//console.log(TimeMaintenanceCarsArr);
	

	return TimeMaintenanceCarsArr;
}



/* #7 根据CarsArr:[]，TimeNowObj:{}检查哪些车需要直接报废，输出需要直接报废的车
 * 输入：CarsArr:[{}],TimeNowObj:{year,month,day}
 * 处理：checkExpireCarsArr()
 * 输出：ExpireCarsArr:[Cars:{}]
 * 说明：优先级biggest
 *	    
 */
function checkExpireCarsArr(CarsArr,TimeNowObj){
	let ExpireCarsArr=[];
	
	for(let car of CarsArr){
		let years=TimeNowObj.year-car.year;				 	//this many years passed.										 
		let months=years*12+TimeNowObj.month-car.month;		//this many months passed.
		let days=months*30+TimeNowObj.day-car.day;			//this many days passed. 360 days for one year.
		//TESTING LINE//console.log('\n'+years+' and '+months+'\n'+days+'\n');
		if(car.AmendJudge=="T"){
										 
			if( days>=1080 )		 						//big amend record.
				ExpireCarsArr.push(car);		
		}

		else{
			if(days>=2160)         					 		//no big amend record
				ExpireCarsArr.push(car);		

		}

	}
	//TESTING LINE//console.log('\nExpireCars:\n');
	//TESTING LINE//console.log(ExpireCarsArr);
	return ExpireCarsArr;
}

/* #8 根据CarsArr:[]，TimeNowObj:{}检查哪些车需要报废提醒，输出需要报废提醒的车
 * 输入：CarsArr:[{}],TimeNowObj:{year,month,day}
 * 处理：checkExpireReminderCarsArr()
 * 输出：ExpireReminderCarsArr:[{}]
 * 说明：优先级less bigger
 *	   
 */
function checkExpireReminderCarsArr(CarsArr,TimeNowObj){
	let ExpireReminderCarsArr=[];

	for(let car of CarsArr){
		let years=TimeNowObj.year-car.year;				 	//this many years passed.										 
		let months=years*12+TimeNowObj.month-car.month;		//this many months passed.
		let days=months*30+TimeNowObj.day-car.day;			//this many days passed. 360 days for one year.
		//TESTING LINE//console.log('\n'+years+' and '+months+'\n'+days+'\n');
		if(car.AmendJudge=="T"){
										 
			if( days<1080 && months>=33)		 						//big amend record.
			{
				 ExpireReminderCarsArr.push(car);
			}
	
						
		}

		else{
			if(days<2160 && months>=66)         					 	//no big amend record
			{
				ExpireReminderCarsArr.push(car);	
			}					

		}

	}
	//TESTING LINE//console.log('\nExpireReminderCarsArr:\n');
	//TESTING LINE//console.log(ExpireReminderCarsArr);


	return ExpireReminderCarsArr;
}

/* #9 根据优先级顺序从高到低将ExpireCarsArr、ExpireReminderCarsArr、DisMaintenanceCarsArr、TimeMaintenanceCarsArr
 * 		整理成对应的remainder表单并打印
 * 输入：ExpireCarsArr、ExpireReminderCarsArr、DisMaintenanceCarsArr、TimeMaintenanceCarsArr
 * 处理：organizeAndPrint()
 * 输出：ExpireReminder、DisMaintenanceReminder、TimeMaintenanceReminder
 *	     print_text:String
 */

function organizeAndPrint(ExpireCarsArr,ExpireReminderCarsArr,DisMaintenanceCarsArr,TimeMaintenanceCarsArr){
	let ExpireReminder=[]; let DisMaintenanceReminder=[];let TimeMaintenanceReminder=[];
	let RealExpireReminderCarsArr=[]; let RealDisMaintenanceCarsArr=[];let RealTimeMaintenanceCarsArr=[];
	let print_text="";

	//Bench prior than what obeys it. ExpireCarsArr prior than ExpireReminderCarsArr.
	let BenchExpireReminderCarsArr=ExpireCarsArr; 
	RealExpireReminderCarsArr=proRealReminderCarsArr(ExpireReminderCarsArr,BenchExpireReminderCarsArr);
	sortRealReminderCarsArr(RealExpireReminderCarsArr);
	ExpireReminder=toUniqueArr(RealExpireReminderCarsArr);

	//Bench prior than what obeys it. ExpireReminderCarsArr prior than DisMaintenanceCarsArr.
	let BenchDisMaintenanceCarsArr=BenchExpireReminderCarsArr.concat(ExpireReminderCarsArr); 	
	RealDisMaintenanceCarsArr=proRealReminderCarsArr(DisMaintenanceCarsArr,BenchDisMaintenanceCarsArr);		
	sortRealReminderCarsArr(RealDisMaintenanceCarsArr);					
	DisMaintenanceReminder=toUniqueArr(RealDisMaintenanceCarsArr);


	//Bench prior than what obeys it. DisMaintenanceCarsArr prior than TimeMaintenanceCarsArr.
	let BenchTimeMaintenanceCarsArr=BenchDisMaintenanceCarsArr.concat(DisMaintenanceCarsArr); 	
	RealTimeMaintenanceCarsArr=proRealReminderCarsArr(TimeMaintenanceCarsArr,BenchTimeMaintenanceCarsArr);	
	sortRealReminderCarsArr(RealTimeMaintenanceCarsArr);										
	TimeMaintenanceReminder=toUniqueArr(RealTimeMaintenanceCarsArr);


	print_text=print(ExpireReminder,DisMaintenanceReminder,TimeMaintenanceReminder);
	console.log(print_text);
	return print_text;
}


	/* #9.1 两个对象数组根据优先级不同，要求新数组中不出现优先级高的数组中的对象,合并成一个新数组,
	 * that is PracticalReminderCarsArr(由于优先级,实际应该提醒的车的数组)
	 * 输入：SubArr,PriorArr——[CarInfoObj],CarInfoObj{CarPlateNum,TimeBuyingCar,brand,kilo,AmendJudge,year,month,day}
	 * 处理：proRealReminderCarsArr()
	 * 输出：RealReminderCarsArr:[{}]	
	 */
	function proRealReminderCarsArr(SubArr,PriorArr){
	
		let RealReminderCarsArr=[];

		for(let SubCar of SubArr){
			let flg=0;
			for(let PriorCar of PriorArr){
						if(PriorCar.CarPlateNum==SubCar.CarPlateNum) flg=1;
			}
			if(flg==0) RealReminderCarsArr.push(SubCar);	
		}
		return RealReminderCarsArr;
	}
	/* #9.2  根据PracticalReminderCarsArr中的对象属性brand对数组元素进行排序（字母从小到大）
	 * 输入：RealReminderCarsArr——[CarInfoObj],CarInfoObj{CarPlateNum,TimeBuyingCar,brand,kilo,AmendJudge,year,month,day}
	 * 处理：sortRealReminderCarsArr()
	 * 输出：SortedRealReminderCarsArr:[{}]	
	 */
	function sortRealReminderCarsArr(RealReminderCarsArr){
	
//		let SortedRealReminderCarsArr=[];
		let i,j;
			
		for(i=0;i<RealReminderCarsArr.length-1;i++){
			for(j=0;j<RealReminderCarsArr.length-1-i;j++)	{
				if(RealReminderCarsArr[j].brand > RealReminderCarsArr[j+1].brand){
		            let temp=RealReminderCarsArr[j];
               		RealReminderCarsArr[j]=RealReminderCarsArr[j+1];
                	RealReminderCarsArr[j+1]=temp;							
				}						
			}	
		}

//		return SortedRealReminderCarsArr;
	}

	/* #9.3 car对象数组根据brand整合(brand不重复，满足reminder的打印要求)
	 * 输入：CarsArr:[CarInfoObj],CarInfoObj{CarPlateNum,TimeBuyingCar,brand,kilo,AmendJudge,year,month,day}
	 * 处理：toUniqueArr()
	 * 输出：UniqueArr:[ReminderObj],ReminderObj{brand,BrandNum,CarPlateNumArr:[]}	
	 */

	function toUniqueArr(CarsArr){
		let UniqueArr=[];
		//initial UniqueArr.
		UniqueArr.push({brand:CarsArr[0].brand,BrandNum:0,CarPlateNumArr:[]});

		for(let Car of CarsArr){
			let FLG=0;
			for(let ReminderObj of UniqueArr){	
				if(ReminderObj.brand==Car.brand) {
					ReminderObj.BrandNum++; 
					ReminderObj.CarPlateNumArr.push(Car.CarPlateNum);
					FLG=1; 
				}

			}

			if(FLG==0)  //signal that there is a new one.
			{ 
		
				let obj={brand:"non".brand,BrandNum:0,CarPlateNumArr:[]};
				obj.BrandNum=1; 
				obj.brand=Car.brand;		
				obj.CarPlateNumArr.push(Car.CarPlateNum);
				UniqueArr.push(obj);
		
			}
		}
		return UniqueArr;

	}
/* #10 print函数将ExpireReminder、DisMaintenanceReminder、TimeMaintenanceReminder打印出来
 * 		
 * 输入：ExpireReminder、DisMaintenanceReminder、TimeMaintenanceReminder ---------[{brand,BrandNum,CarPlateNumArr:[]}]
 * 处理：print()
 * 输出：print_text:String
 *	     
 */


function print(ExpireReminder,DisMaintenanceReminder,TimeMaintenanceReminder){
	let print_text="";

	print_text+=`Reminder
==================`+'\n';

	print_text+='\n* Time-related maintenance coming soon...\n';
	print_text+=produceReminderText(TimeMaintenanceReminder);

	print_text+='\n* Distance-related maintenance coming soon...\n';
	print_text+=produceReminderText(DisMaintenanceReminder);

	print_text+='\n* Write-off coming soon...\n';
	print_text+=produceReminderText(ExpireReminder);	

	return print_text;
}

	/* #10.1 reminder对应的text生成
	 * 		
	 * 输入：reminder:[{brand,BrandNum,CarPlateNumArr:[]}]
	 * 处理：produceReminderText()
	 * 输出：ReminderText:String
	 *	     
	 */

	function produceReminderText(reminder){
		let ReminderText="";
		for(let obj of reminder){
			ReminderText+=obj.brand+": "+obj.BrandNum+" (";
			for(let plate of obj.CarPlateNumArr){
			ReminderText+=plate+",";		
			}
			ReminderText=ReminderText.substr(0,ReminderText.length-1);//remove last ","
		ReminderText+=")\n"
		}
		return ReminderText;
	}

/********main***********/
function main(inputs){

	let StrArr=[];
	let TimeNowObj={};
	let CarsArr=[];
	let ExpireCarsArr=[];let ExpireReminderCarsArr=[];let DisMaintenanceCarsArr=[];let TimeMaintenanceCarsArr=[];
	let print_text="";
	
	StrArr=getStrArr(inputs);
	TimeNowObj=getTimeNowObj(StrArr);
	CarsArr=getCarsArr(StrArr);

	DisMaintenanceCarsArr=checkDisMaintenanceCarsArr(CarsArr);
	TimeMaintenanceCarsArr=checkTimeMaintenanceCarsArr(CarsArr,TimeNowObj);
	ExpireCarsArr=checkExpireCarsArr(CarsArr,TimeNowObj);
	ExpireReminderCarsArr=checkExpireReminderCarsArr(CarsArr,TimeNowObj);
	print_text=organizeAndPrint(ExpireCarsArr,ExpireReminderCarsArr,DisMaintenanceCarsArr,TimeMaintenanceCarsArr);

	return print_text;
}
module.exports = main;
