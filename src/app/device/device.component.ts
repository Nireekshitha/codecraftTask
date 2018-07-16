import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
declare var $: any;
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, AfterViewInit {
  public mode: string = 'morning';
  public deviceName;
  public selectedIndex = 1;
  gaugeType = 'semi';
  gaugeValue = 64;
  gaugeAppendText = '';
  gaugeCap = 'butt';
  backgroundColor = '#AD6BFF';
  gaugeThick = 10;
  slideConfig = { 'slidesToShow': 4, 'slidesToScroll': 4 };
  public items = [
    {
      image: '/assets/images/thermostat.png',
      heading: 'THERMOSTAT',
      subheading: 'in Dening room'
    },
    {
      image: '/assets/images/lamp.png',
      heading: 'BED LAMP',
      subheading: 'in Bed room'
    },
    {
      image: '/assets/images/ac.png',
      heading: 'NORIA AC',
      subheading: 'in Bed room'
    },
    {
      image: '/assets/images/lock.png',
      heading: 'DOOR LOCK',
      subheading: 'in Home office'
    },
    {
      image: '/assets/images/tv.png',
      heading: 'LG TV',
      subheading: 'in Living room'
    },
    {
      image: '/assets/images/thermostat.png',
      heading: 'THERMOSTAT',
      subheading: 'in bed room'
    }
  ];

  constructor() { }

  ngOnInit() {


    // $('.slider-nav').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   // asNavFor: '.slider-for',
    //   dots: true,
    //   focusOnSelect: true
    // });
    $('.slider-for .slick-slide').eq(0).addClass('slick-fade-class');

    $('.parent').click(function (e) {
      e.preventDefault();
      // const slideno = $(this).data('slide');
      // $('.slider-for').slick('slickGoTo', slideno - 1);
    });
    $('#slider').roundSlider({
      sliderType: 'min-range',
      circleShape: 'half-top',
      radius: 90,
      showTooltip: true,
      width: 3,
      value: 60,
      handleShape: 'round',
      handleSize: '+18',
    });
  }
  gotTonthSlide(index) {
    const slideno = $(this).data('slide');
    if (index == 0) {
      $('.slider-for').slick('slickGoTo', this.items.length-1 );
    } else {
      $('.slider-for').slick('slickGoTo', index - 1);
    }

    this.deviceName = this.items[index].heading;
    this.selectedIndex = index;
  }

  ngAfterViewInit() {
    $('.slider-for').slick({
      dots: false,
      vertical: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // arrows: false,
      // fade: true,
      focusOnSelect: true
    });
  }
}