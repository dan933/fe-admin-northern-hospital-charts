import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { ChartService } from '../services/chart.service';

//echarts
import { EChartsOption } from 'echarts';

//Date range picker
import {FormGroup, FormControl} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-anxiety-depression-chart',
  templateUrl: './anxiety-depression-chart.component.html',
  styleUrls: ['./anxiety-depression-chart.component.scss']
})
export class AnxietyDepressionChartComponent implements OnInit {
  
  today = new Date(Date.now())
  lastYear = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)

  range = new FormGroup({
    start: new FormControl(this.lastYear),
    end: new FormControl(this.today)
  });

  //Patient summary heading
  id:string=""
  name:any[]=[]
  

  //charts d1 to a8 questions
  dOneOptions: EChartsOption = {}
  dTwoOptions:EChartsOption = {}
  dThreeOptions:EChartsOption = {}
  dFourOptions:EChartsOption = {}
  dFiveOptions:EChartsOption = {}
  dSixOptions:EChartsOption = {}
  dSevenOptions:EChartsOption = {}
  dEightOptions:EChartsOption = {}
  aOneOptions:EChartsOption = {}
  aTwoOptions:EChartsOption = {}
  aThreeOptions:EChartsOption = {}
  aFourOptions:EChartsOption = {}
  aFiveOptions:EChartsOption = {}
  aSixOptions:EChartsOption = {}
  aSevenOptions:EChartsOption = {}
  aEightOptions:EChartsOption = {}


  constructor(    
    private dataService : DataService,
    private chartService: ChartService,
    private route: ActivatedRoute) { 
    this.route.params.subscribe( params => 
    this.id = params.id
    )
  }


  ngOnInit(): void {
    this.dataService.getAnxiety(this.id,this.lastYear,this.today)
    .subscribe((data:any) => {
      this.dOneOptions = this.chartService.echartsFormat(data,'d1');
      this.dTwoOptions = this.chartService.echartsFormat(data,'d2');
      this.dThreeOptions = this.chartService.echartsFormat(data,'d3');
      this.dFourOptions = this.chartService.echartsFormat(data,'d4');
      this.dFiveOptions = this.chartService.echartsFormat(data,'d5');
      this.dSixOptions = this.chartService.echartsFormat(data,'d6');
      this.dSevenOptions = this.chartService.echartsFormat(data,'d7');
      this.dEightOptions = this.chartService.echartsFormat(data,'d8');
      this.aOneOptions = this.chartService.echartsFormat(data,'a1');
      this.aTwoOptions = this.chartService.echartsFormat(data,'a2');
      this.aThreeOptions = this.chartService.echartsFormat(data,'a3');
      this.aFourOptions = this.chartService.echartsFormat(data,'a4');
      this.aFiveOptions = this.chartService.echartsFormat(data,'a5');
      this.aSixOptions = this.chartService.echartsFormat(data,'a6');
      this.aSevenOptions = this.chartService.echartsFormat(data,'a7');
      this.aEightOptions = this.chartService.echartsFormat(data,'a8');
    })

    this.dataService.getPatientName(this.id)
      .subscribe((data:any) => {
      this.name = data    
    })
  }

  // source https://stackoverflow.com/questions/63823557/angular-material-datepickerrange-get-value-on-change
  saveDate(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){

    console.log(typeof(dateRangeEnd.value),dateRangeStart.value)

    this.dataService.getAnxiety(this.id,dateRangeStart.value,dateRangeEnd.value)
    .subscribe((data:any) => {
      console.log(data)
      this.dOneOptions = this.chartService.echartsFormat(data,'d1');
      this.dTwoOptions = this.chartService.echartsFormat(data,'d2');
      this.dThreeOptions = this.chartService.echartsFormat(data,'d3');
      this.dFourOptions = this.chartService.echartsFormat(data,'d4');
      this.dFiveOptions = this.chartService.echartsFormat(data,'d5');
      this.dSixOptions = this.chartService.echartsFormat(data,'d6');
      this.dSevenOptions = this.chartService.echartsFormat(data,'d7');
      this.dEightOptions = this.chartService.echartsFormat(data,'d8');
      this.aOneOptions = this.chartService.echartsFormat(data,'a1');
      this.aTwoOptions = this.chartService.echartsFormat(data,'a2');
      this.aThreeOptions = this.chartService.echartsFormat(data,'a3');
      this.aFourOptions = this.chartService.echartsFormat(data,'a4');
      this.aFiveOptions = this.chartService.echartsFormat(data,'a5');
      this.aSixOptions = this.chartService.echartsFormat(data,'a6');
      this.aSevenOptions = this.chartService.echartsFormat(data,'a7');
      this.aEightOptions = this.chartService.echartsFormat(data,'a8');
    })
  }

}