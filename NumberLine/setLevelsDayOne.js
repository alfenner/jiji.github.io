
document.getElementById("dayOneWarmup").addEventListener("click", queDayOneWarmup)
//document.getElementById("dayOneSettingNumbers").addEventListener("click", queDayOneSettingNumbers)
document.getElementById("dayOneClasswork").addEventListener("click", queDayOneClasswork)

function queDayOneWarmup(){
    window.localStorage['activityIndex'] = 1
    window.localStorage['teacherMode'] = 'false'
}

function queDayOneSettingNumbers(){
    window.localStorage['activityIndex'] = 2
    window.localStorage['teacherMode'] = 'false'
}

function queDayOneClasswork(){
    window.localStorage['activityIndex'] = 3
    window.localStorage['teacherMode'] = 'false'
}

//document.getElementById("dayOneWarmupTeacher").addEventListener("click", queDayOneWarmupTeacher)
//document.getElementById("dayOneSettingNumbersTeacher").addEventListener("click", queDayOneSettingNumbersTeacher)
document.getElementById("dayOneClassworkTeacher").addEventListener("click", queDayOneClassworkTeacher)

function queDayOneWarmupTeacher(){
    window.localStorage['activityIndex'] = 1
    window.localStorage['teacherMode'] = 'true'
}

function queDayOneSettingNumbersTeacher(){
    window.localStorage['activityIndex'] = 2
    window.localStorage['teacherMode'] = 'true'
}

function queDayOneClassworkTeacher(){
    window.localStorage['activityIndex'] = 3
    window.localStorage['teacherMode'] = 'true'
}