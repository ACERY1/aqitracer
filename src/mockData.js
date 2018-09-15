import Mock, {Random} from 'mockjs'
const city = Random.city()
const lastTwoWeeks = {}

for (let i = 1; i<=28; i++) {
  lastTwoWeeks[i.toString()] = {
    "city": city,
    "AQI": Random.integer(60,100),
    "quality": ['优', '良', '中', '差'][Random.integer(0,3)],
    "date": Random.date('yyyy-MM-dd hh:mm')
  }
}



const data = Mock.mock({
  "resultcode":"200",
  "reason":"SUCCESSED!",
  "error_code":0,
  "result": [
    {
      "citynow": {
        "city": city,
        "AQI": Random.integer(0,100),
        "quality": ['优', '良', '中', '差'][Random.integer(0,3)],
        "date": Random.date('yyyy-MM-dd hh:mm')
      },
      "lastTwoWeeks": lastTwoWeeks
    }
  ]
})

const data2 = {
	"resultcode": "200",
	"reason": "SUCCESSED!",
	"error_code": 0,
	"result": [{
		"citynow": {
			"city": "杭州",
			"AQI": "38",
			"quality": "优",
			"date": "2018-09-15 23:00"
		},
		"lastTwoWeeks": {
			"1": {
				"city": "杭州",
				"AQI": "22",
				"quality": "优",
				"date": "2018-08-19"
			},
			"2": {
				"city": "杭州",
				"AQI": "47",
				"quality": "优",
				"date": "2018-08-20"
			},
			"3": {
				"city": "杭州",
				"AQI": "60",
				"quality": "良",
				"date": "2018-08-21"
			},
			"4": {
				"city": "杭州",
				"AQI": "38",
				"quality": "优",
				"date": "2018-08-22"
			},
			"5": {
				"city": "杭州",
				"AQI": "50",
				"quality": "优",
				"date": "2018-08-23"
			},
			"6": {
				"city": "杭州",
				"AQI": "79",
				"quality": "良",
				"date": "2018-08-24"
			},
			"7": {
				"city": "杭州",
				"AQI": "46",
				"quality": "优",
				"date": "2018-08-25"
			},
			"8": {
				"city": "杭州",
				"AQI": "43",
				"quality": "优",
				"date": "2018-08-26"
			},
			"9": {
				"city": "杭州",
				"AQI": "26",
				"quality": "优",
				"date": "2018-08-27"
			},
			"10": {
				"city": "杭州",
				"AQI": "28",
				"quality": "优",
				"date": "2018-08-28"
			},
			"11": {
				"city": "杭州",
				"AQI": "29",
				"quality": "优",
				"date": "2018-08-29"
			},
			"12": {
				"city": "杭州",
				"AQI": "39",
				"quality": "优",
				"date": "2018-08-30"
			},
			"13": {
				"city": "杭州",
				"AQI": "38",
				"quality": "优",
				"date": "2018-08-31"
			},
			"14": {
				"city": "杭州",
				"AQI": "42",
				"quality": "优",
				"date": "2018-09-01"
			},
			"15": {
				"city": "杭州",
				"AQI": "49",
				"quality": "优",
				"date": "2018-09-02"
			},
			"16": {
				"city": "杭州",
				"AQI": "36",
				"quality": "优",
				"date": "2018-09-03"
			},
			"17": {
				"city": "杭州",
				"AQI": "60",
				"quality": "良",
				"date": "2018-09-04"
			},
			"18": {
				"city": "杭州",
				"AQI": "70",
				"quality": "良",
				"date": "2018-09-05"
			},
			"19": {
				"city": "杭州",
				"AQI": "105",
				"quality": "轻度污染",
				"date": "2018-09-06"
			},
			"20": {
				"city": "杭州",
				"AQI": "49",
				"quality": "优",
				"date": "2018-09-07"
			},
			"21": {
				"city": "杭州",
				"AQI": "41",
				"quality": "优",
				"date": "2018-09-08"
			},
			"22": {
				"city": "杭州",
				"AQI": "42",
				"quality": "优",
				"date": "2018-09-09"
			},
			"23": {
				"city": "杭州",
				"AQI": "52",
				"quality": "良",
				"date": "2018-09-10"
			},
			"24": {
				"city": "杭州",
				"AQI": "41",
				"quality": "优",
				"date": "2018-09-11"
			},
			"25": {
				"city": "杭州",
				"AQI": "46",
				"quality": "优",
				"date": "2018-09-12"
			},
			"26": {
				"city": "杭州",
				"AQI": "59",
				"quality": "良",
				"date": "2018-09-13"
			},
			"27": {
				"city": "杭州",
				"AQI": "58",
				"quality": "良",
				"date": "2018-09-14"
			},
			"28": {
				"city": "杭州",
				"AQI": "38",
				"quality": "优",
				"date": "2018-09-15"
			}
		},
		"lastMoniData": {
			"1": {
				"city": "滨江",
				"AQI": "42",
				"America_AQI": "72",
				"quality": "优",
				"PM2.5Hour": "26",
				"PM2.5Day": "26",
				"PM10Hour": "42",
				"lat": "30.21",
				"lon": "120.210833"
			},
			"2": {
				"city": "西溪",
				"AQI": "41",
				"America_AQI": "74",
				"quality": "优",
				"PM2.5Hour": "27",
				"PM2.5Day": "27",
				"PM10Hour": "41",
				"lat": "30.27472222",
				"lon": "120.0633333"
			},
			"3": {
				"city": "千岛湖",
				"AQI": "78",
				"America_AQI": "125",
				"quality": "良",
				"PM2.5Hour": "—",
				"PM2.5Day": "—",
				"PM10Hour": "—",
				"lat": "29.640581",
				"lon": "119.025965"
			},
			"4": {
				"city": "下沙",
				"AQI": "26",
				"America_AQI": "56",
				"quality": "优",
				"PM2.5Hour": "18",
				"PM2.5Day": "18",
				"PM10Hour": "24",
				"lat": "30.30583333",
				"lon": "120.3480556"
			},
			"5": {
				"city": "卧龙桥",
				"AQI": "37",
				"America_AQI": "70",
				"quality": "优",
				"PM2.5Hour": "25",
				"PM2.5Day": "25",
				"PM10Hour": "37",
				"lat": "30.246",
				"lon": "120.128"
			},
			"6": {
				"city": "浙江农大",
				"AQI": "41",
				"America_AQI": "68",
				"quality": "优",
				"PM2.5Hour": "24",
				"PM2.5Day": "24",
				"PM10Hour": "41",
				"lat": "30.268",
				"lon": "120.193"
			},
			"7": {
				"city": "朝晖五区",
				"AQI": "42",
				"America_AQI": "68",
				"quality": "优",
				"PM2.5Hour": "24",
				"PM2.5Day": "24",
				"PM10Hour": "42",
				"lat": "30.288",
				"lon": "120.171"
			},
			"8": {
				"city": "和睦小学",
				"AQI": "36",
				"America_AQI": "70",
				"quality": "优",
				"PM2.5Hour": "25",
				"PM2.5Day": "25",
				"PM10Hour": "36",
				"lat": "30.31194444",
				"lon": "120.1197222"
			},
			"9": {
				"city": "临平镇",
				"AQI": "36",
				"America_AQI": "52",
				"quality": "优",
				"PM2.5Hour": "16",
				"PM2.5Day": "16",
				"PM10Hour": "36",
				"lat": "30.418333",
				"lon": "120.300556"
			},
			"10": {
				"city": "城厢镇",
				"AQI": "38",
				"America_AQI": "72",
				"quality": "优",
				"PM2.5Hour": "26",
				"PM2.5Day": "26",
				"PM10Hour": "38",
				"lat": "30.18194444",
				"lon": "120.2697222"
			},
			"11": {
				"city": "云栖",
				"AQI": "37",
				"America_AQI": "62",
				"quality": "优",
				"PM2.5Hour": "21",
				"PM2.5Day": "21",
				"PM10Hour": "37",
				"lat": "30.18083333",
				"lon": "120.0883333"
			}
		}
	}]
}

export default data2;

// export default {
//   "resultcode":"200",
//   "reason":"SUCCESSED!",
//   "error_code":0,
//   "result":[
//       {
//           "citynow":{
//               "city":"重庆",
//               "AQI":"60",
//               "quality":"良",
//               "date":"2018-09-03 22:00"
//           },
//           "lastTwoWeeks":{
//               "1":{
//                   "city":"重庆",
//                   "AQI":"46",
//                   "quality":"优",
//                   "date":"2018-08-07"
//               },
//               "2":{
//                   "city":"重庆",
//                   "AQI":"38",
//                   "quality":"优",
//                   "date":"2018-08-08"
//               },
//               "3":{
//                   "city":"重庆",
//                   "AQI":"58",
//                   "quality":"良",
//                   "date":"2018-08-09"
//               },
//               "4":{
//                   "city":"重庆",
//                   "AQI":"56",
//                   "quality":"良",
//                   "date":"2018-08-10"
//               },
//               "5":{
//                   "city":"重庆",
//                   "AQI":"47",
//                   "quality":"优",
//                   "date":"2018-08-11"
//               },
//               "6":{
//                   "city":"重庆",
//                   "AQI":"64",
//                   "quality":"良",
//                   "date":"2018-08-12"
//               },
//               "7":{
//                   "city":"重庆",
//                   "AQI":"65",
//                   "quality":"良",
//                   "date":"2018-08-13"
//               },
//               "8":{
//                   "city":"重庆",
//                   "AQI":"70",
//                   "quality":"良",
//                   "date":"2018-08-14"
//               },
//               "9":{
//                   "city":"重庆",
//                   "AQI":"54",
//                   "quality":"良",
//                   "date":"2018-08-15"
//               },
//               "10":{
//                   "city":"重庆",
//                   "AQI":"59",
//                   "quality":"良",
//                   "date":"2018-08-16"
//               },
//               "11":{
//                   "city":"重庆",
//                   "AQI":"44",
//                   "quality":"优",
//                   "date":"2018-08-17"
//               },
//               "12":{
//                   "city":"重庆",
//                   "AQI":"55",
//                   "quality":"良",
//                   "date":"2018-08-18"
//               },
//               "13":{
//                   "city":"重庆",
//                   "AQI":"64",
//                   "quality":"良",
//                   "date":"2018-08-19"
//               },
//               "14":{
//                   "city":"重庆",
//                   "AQI":"57",
//                   "quality":"良",
//                   "date":"2018-08-20"
//               },
//               "15":{
//                   "city":"重庆",
//                   "AQI":"57",
//                   "quality":"良",
//                   "date":"2018-08-21"
//               },
//               "16":{
//                   "city":"重庆",
//                   "AQI":"45",
//                   "quality":"优",
//                   "date":"2018-08-22"
//               },
//               "17":{
//                   "city":"重庆",
//                   "AQI":"47",
//                   "quality":"优",
//                   "date":"2018-08-23"
//               },
//               "18":{
//                   "city":"重庆",
//                   "AQI":"57",
//                   "quality":"良",
//                   "date":"2018-08-24"
//               },
//               "19":{
//                   "city":"重庆",
//                   "AQI":"61",
//                   "quality":"良",
//                   "date":"2018-08-25"
//               },
//               "20":{
//                   "city":"重庆",
//                   "AQI":"72",
//                   "quality":"良",
//                   "date":"2018-08-26"
//               },
//               "21":{
//                   "city":"重庆",
//                   "AQI":"67",
//                   "quality":"良",
//                   "date":"2018-08-27"
//               },
//               "22":{
//                   "city":"重庆",
//                   "AQI":"67",
//                   "quality":"良",
//                   "date":"2018-08-28"
//               },
//               "23":{
//                   "city":"重庆",
//                   "AQI":"71",
//                   "quality":"良",
//                   "date":"2018-08-29"
//               },
//               "24":{
//                   "city":"重庆",
//                   "AQI":"58",
//                   "quality":"良",
//                   "date":"2018-08-30"
//               },
//               "25":{
//                   "city":"重庆",
//                   "AQI":"55",
//                   "quality":"良",
//                   "date":"2018-08-31"
//               },
//               "26":{
//                   "city":"重庆",
//                   "AQI":"38",
//                   "quality":"优",
//                   "date":"2018-09-01"
//               },
//               "27":{
//                   "city":"重庆",
//                   "AQI":"36",
//                   "quality":"优",
//                   "date":"2018-09-02"
//               },
//               "28":{
//                   "city":"重庆",
//                   "AQI":"60",
//                   "quality":"良",
//                   "date":"2018-09-03"
//               }
//           },
//           "lastMoniData":{
//               "1":{
//                   "city":"缙云山",
//                   "AQI":"38",
//                   "America_AQI":"62",
//                   "quality":"优",
//                   "PM2.5Hour":"21",
//                   "PM2.5Day":"21",
//                   "PM10Hour":"32",
//                   "lat":"29.876756",
//                   "lon":"106.351172"
//               },
//               "2":{
//                   "city":"天生",
//                   "AQI":"49",
//                   "America_AQI":"82",
//                   "quality":"优",
//                   "PM2.5Hour":"31",
//                   "PM2.5Day":"31",
//                   "PM10Hour":"49",
//                   "lat":"29.827678",
//                   "lon":"106.428893"
//               },
//               "3":{
//                   "city":"两路",
//                   "AQI":"65",
//                   "America_AQI":"64",
//                   "quality":"良",
//                   "PM2.5Hour":"22",
//                   "PM2.5Day":"22",
//                   "PM10Hour":"48",
//                   "lat":"29.725021",
//                   "lon":"106.636514"
//               },
//               "4":{
//                   "city":"虎溪",
//                   "AQI":"53",
//                   "America_AQI":"94",
//                   "quality":"良",
//                   "PM2.5Hour":"37",
//                   "PM2.5Day":"37",
//                   "PM10Hour":"54",
//                   "lat":"29.604587",
//                   "lon":"106.306593"
//               },
//               "5":{
//                   "city":"南坪",
//                   "AQI":"63",
//                   "America_AQI":"88",
//                   "quality":"良",
//                   "PM2.5Hour":"34",
//                   "PM2.5Day":"34",
//                   "PM10Hour":"76",
//                   "lat":"29.511824",
//                   "lon":"106.584174"
//               },
//               "6":{
//                   "city":"唐家沱",
//                   "AQI":"38",
//                   "America_AQI":"72",
//                   "quality":"优",
//                   "PM2.5Hour":"26",
//                   "PM2.5Day":"26",
//                   "PM10Hour":"35",
//                   "lat":"29.625161",
//                   "lon":"106.660157"
//               },
//               "7":{
//                   "city":"茶园",
//                   "AQI":"65",
//                   "America_AQI":"102",
//                   "quality":"良",
//                   "PM2.5Hour":"41",
//                   "PM2.5Day":"41",
//                   "PM10Hour":"79",
//                   "lat":"29.492968",
//                   "lon":"106.647289"
//               },
//               "8":{
//                   "city":"白市驿",
//                   "AQI":"83",
//                   "America_AQI":"104",
//                   "quality":"良",
//                   "PM2.5Hour":"42",
//                   "PM2.5Day":"42",
//                   "PM10Hour":"116",
//                   "lat":"29.494461",
//                   "lon":"106.376908"
//               },
//               "9":{
//                   "city":"空港",
//                   "AQI":"64",
//                   "America_AQI":"74",
//                   "quality":"良",
//                   "PM2.5Hour":"27",
//                   "PM2.5Day":"27",
//                   "PM10Hour":"47",
//                   "lat":"29.704036",
//                   "lon":"106.612668"
//               },
//               "10":{
//                   "city":"新山村",
//                   "AQI":"76",
//                   "America_AQI":"100",
//                   "quality":"良",
//                   "PM2.5Hour":"40",
//                   "PM2.5Day":"40",
//                   "PM10Hour":"102",
//                   "lat":"29.489647",
//                   "lon":"106.490211"
//               },
//               "11":{
//                   "city":"礼嘉",
//                   "AQI":"92",
//                   "America_AQI":"151",
//                   "quality":"良",
//                   "PM2.5Hour":"68",
//                   "PM2.5Day":"68",
//                   "PM10Hour":"111",
//                   "lat":"29.648937",
//                   "lon":"106.573188"
//               },
//               "12":{
//                   "city":"蔡家",
//                   "AQI":"60",
//                   "America_AQI":"88",
//                   "quality":"良",
//                   "PM2.5Hour":"34",
//                   "PM2.5Day":"34",
//                   "PM10Hour":"69",
//                   "lat":"29.714819",
//                   "lon":"106.462009"
//               },
//               "13":{
//                   "city":"鱼新街",
//                   "AQI":"65",
//                   "America_AQI":"100",
//                   "quality":"良",
//                   "PM2.5Hour":"40",
//                   "PM2.5Day":"40",
//                   "PM10Hour":"80",
//                   "lat":"29.394422",
//                   "lon":"106.520578"
//               }
//           }
//       }
//   ]
// }