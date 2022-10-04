import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  forwardRef,
} from "react";
import TuiCalendar from "tui-calendar";
import moment from "moment";
import 'moment/locale/es';
import FacebookIcon from '../../assets/img/FacebookIcono.png';
import instagramIcon from '../../assets/img/instagramIcono.png';
import TwitterIcon from '../../assets/img/TwitterIcono.png';
import googlemybIcon from '../../assets/img/google-mybIcono.png';
import "tui-calendar/dist/tui-calendar.css";

import "./../styles.css";

const CustomTuiCalendar = forwardRef(
  (
    {
      height = "800px",
      calendars = [],
      schedules = [],
      isReadOnly = true,
      showSlidebar = false,
      showMenu = false,
      ...rest
    },
    ref
  ) => {
    const calendarInstRef = useRef(null);
    const tuiRef = useRef(null);
    const wrapperRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [renderRange, setRenderRange] = useState("");
    const [type, setType] = useState("Mes");
    const [checkedCalendars, setCheckedCalendars] = useState(
      calendars.map((element) => ({ ...element, isChecked: true }))
    );
    const [filterSchedules, setFilterSchedules] = useState(schedules);



    useEffect(() => {
      calendarInstRef.current = new TuiCalendar(tuiRef.current, {
        useDetailPopup: true,
        useCreationPopup: false,
        isReadOnly: true,
        defaultView: "month",
        taskView: true,
        month: {
            daynames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            startDayOfWeek: 1,
        },  
        template: {
     
          time: function (schedule) {
            return _getTimeTemplate(schedule, false);
          },
      
          comingDuration: function (schedule) {
            return (
              '<span class="calendar-icon ic-travel-time"></span>' +
              schedule.comingDuration +
              "min."
            );
          },
          monthMoreTitleDate: function (date, dayname) {
            var day = date.split(".")[2];

            return (
              '<span class="tui-full-calendar-month-more-title-day">' +
              day +
              '</span> <span class="tui-full-calendar-month-more-title-day-label">' +
              dayname +
              "</span>"
            );
          },
          monthMoreClose: function () {
            return '<span class="tui-full-calendar-icon tui-full-calendar-ic-close"></span>';
          },
          monthGridHeader: function (dayModel) {
            var date = parseInt(dayModel.date.split("-")[2], 10);
            var classNames = ["tui-full-calendar-weekday-grid-date "];

            if (dayModel.isToday) {
              classNames.push("tui-full-calendar-weekday-grid-date-decorator");
            }

            return (
              '<span class="' + classNames.join(" ") + '">' + date + "</span>"
            );
          },
          monthGridHeaderExceed: function (hiddenSchedules) {
            return (
              '<span class="weekday-grid-more-schedules">+' +
              hiddenSchedules +
              "</span>"
            );
          },
          monthGridFooter: function () {
            return "";
          },
          monthGridFooterExceed: function (hiddenSchedules) {
            return "";
          },
          monthDayname: function (model) {
            return model.label.toString().toLocaleUpperCase();
          },
          weekDayname: function (model) {
            return (
              '<span class="tui-full-calendar-dayname-date">' +
              model.date +
              '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' +
              model.dayName +
              "</span>"
            );
          },
          weekGridFooterExceed: function (hiddenSchedules) {
            return "+" + hiddenSchedules;
          },
      
         
          // timezoneDisplayLabel: function(timezoneOffset, displayLabel) {
          //   var gmt, hour, minutes;

          //   if (!displayLabel) {
          //     gmt = timezoneOffset < 0 ? "-" : "+";
          //     hour = Math.abs(parseInt(timezoneOffset / 60, 10));
          //     minutes = Math.abs(timezoneOffset % 60);
          //     displayLabel = gmt + getPadStart(hour) + ":" + getPadStart(minutes);
          //   }

          //   return displayLabel;
          // },
          timegridDisplayPrimayTime: function (time) {
            // will be deprecated. use 'timegridDisplayPrimaryTime'
            var meridiem = "am";
            var hour = time.hour;

            if (time.hour > 12) {
              meridiem = "pm";
              hour = time.hour - 12;
            }

            return hour + " " + meridiem;
          },
          timegridDisplayPrimaryTime: function (time) {
            var meridiem = "am";
            var hour = time.hour;

            if (time.hour > 12) {
              meridiem = "pm";
              hour = time.hour - 12;
            }

            return hour + " " + meridiem;
          },
          // timegridDisplayTime: function(time) {
          //   return getPadStart(time.hour) + ":" + getPadStart(time.hour);
          // },
          timegridCurrentTime: function (timezone) {
            var templates = [];

            if (timezone.dateDifference) {
              templates.push(
                "[" +
                  timezone.dateDifferenceSign +
                  timezone.dateDifference +
                  "]<br>"
              );
            }

            templates.push(moment(timezone.hourmarker).format("HH:mm a"));

            return templates.join("");
          },

          popupDetailDate: function (isAllDay, start, end) {
            var isSameDate = moment(start).isSame(end);
            var endFormat = (isSameDate ? "" : "YYYY/MM/DD ") + "HH:mm";

            if (isAllDay) {
              return (
                moment(start).format("YYYY/MM/DD") +
                (isSameDate ? "" : " - " + moment(end).format("YYYY/MM/DD"))
              );
            }

            return (
              moment(start.toDate()).format("MMM-DD") 
            );
          },
        
      
          popupDetailBody: function (schedule) {
            const meses = [
              "Ene.", "Feb.", "Mar.",
              "Abr.", "May.", "Jun.", "Jul.",
              "Ago.", "Sep.", "Oct.",
              "Nov.", "Dic."
            ]
            
            
            var date = new Date(schedule.start._date);
            var dia = date.getDate();
            var mes = date.getMonth();
            var FechaPublicacion = dia + ' de ' + meses[mes];


           let avatar = '';
           let  mediaUrl = '';
           let rssPublicadas = '';

            //Redes sociales
            let rss = '' ;
            schedule.raw[0].redes.map(TipodeRedes => {
              switch (TipodeRedes.network) {
													
                case 'facebook':
                    rss = FacebookIcon;
                    break;
                case 'gmb':
                    rss = googlemybIcon;
                    break;
                case 'instagram':
                    rss = instagramIcon;
                    break;
                case 'linkedin':
                    rss = 'https://notecopies.es//wp-content/uploads/2019/11/LinkedIn.png';
                    break;
                case 'twitter':
                    rss = TwitterIcon;
                    break;

             }

                //Estado del post
                let status
                switch (TipodeRedes.status){
                case 'PENDING':
                status = "<div class='mainPublishPost'><span class='UnpublisPost'></span><span> Borrador</span></div>";
                break;
                case 'PUBLISHED':
                status = "<div class='mainPublishPost'><span class='publisPost'></span><span>Publicado</span></div>";
                break;
                }               
               let rssPublicasAvatar = rssPublicadas += '<img class="rssPublicadas" src="'+rss+'">';
                avatar = '   <div class="mainCalendarPerfil"><div class="ContenrdormainCalendarAvatar"><div class="mainCalendarAvatar">'+rssPublicasAvatar+'</div><div class="PostStatus">'+status+'</div></div><div class="mainNameUserAvatar"><span>'+FechaPublicacion+'</span></div></div>';
            });
 
            




           //Imagen o video
              if(schedule.raw[0].mediaUrl.includes('.mp4')){
                mediaUrl += '<video class="iconRsssCalendar calendarVideo" id="CalendarVideo" controls autoplay  src="'+schedule.raw[0].mediaUrl+'"></video>';
                }else if ( schedule.raw.mediaUrl === null ){
                mediaUrl += '<img class="iconRsssCalendar"  src="https://sexymetrics.com/wp-content/uploads/2022/05/Sexy-Metrics_EN-PROCESO.png">';
                }else{
                mediaUrl += '<img class="iconRsssCalendar"  src="'+schedule.raw[0].mediaUrl+'">';
                }
              
                //return
                return avatar + mediaUrl + schedule.body;
          },
         
        },

        calendars,
        ...rest
      });
      setRenderRangeText();
      // render schedules
      calendarInstRef.current.clear();
      calendarInstRef.current.createSchedules(filterSchedules, true);
      calendarInstRef.current.render();


      calendarInstRef.current.on("clickDayname", function (event) {
        // console.log("clickDayname", event);
        if (calendarInstRef.current.getViewName() === "week") {
          calendarInstRef.current.setDate(new Date(event.date));
          calendarInstRef.current.changeView("day", true);
        }
      });

      calendarInstRef.current.on("clickMore", function (event) {
        // console.log("clickMore", event.date, event.target);
      });

      calendarInstRef.current.on("clickTimezonesCollapseBtn", function (
        timezonesCollapsed
      ) {
        // console.log(timezonesCollapsed);
      });

     

      return () => {
        calendarInstRef.current.destroy();
      };
    }, [tuiRef, schedules]);

    useLayoutEffect(() => {
      // console.log("before render");
    });

    function currentCalendarDate(format) {
      moment.locale('es');
      var currentDate = moment([
        calendarInstRef.current.getDate().getFullYear(),
        calendarInstRef.current.getDate().getMonth(),
        calendarInstRef.current.getDate().getDate()
      ]);

      return currentDate.format(format);
    }

    function setRenderRangeText() {
      var options = calendarInstRef.current.getOptions();
      var viewName = calendarInstRef.current.getViewName();

      var html = [];
      if (viewName === "day") {
        html.push(currentCalendarDate("DD MMMM YYYY"));
      } else if (
        viewName === "month" &&
        (!options.month.visibleWeeksCount ||
          options.month.visibleWeeksCount > 4)
      ) {
        html.push(currentCalendarDate("MMMM YYYY"));
      } else {
        html.push(
          moment(calendarInstRef.current.getDateRangeStart().getTime()).format(
            "DD MMMM YYYY"
          )
        );
        html.push(" ~ ");
        html.push(
          moment(calendarInstRef.current.getDateRangeEnd().getTime()).format(
            "MMMM YYYY"
          )
        );
      }
      setRenderRange(html.join(""));
    }

    function _getTimeTemplate(schedule, isAllDay) {
      var html = [];

      if (!isAllDay) {
        html.push(
          "<strong>" +
            moment(schedule.start.toDate()).format("HH:mm") +
            "</strong> "
        );
      }
  
        if (schedule.isReadOnly) {
          html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
          html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length) {
          html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
          html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }

        html.push(" " + schedule.title);
      

      return html.join("");
    }

    useEffect(() => {
      document.addEventListener("click", handleClick, false);

      return () => {
        document.removeEventListener("click", handleClick, false);
      };
    });

    const handleClick = (e) => {
      if (wrapperRef.current?.contains(e.target)) {
        // inside click
        // console.log("inside");
        return;
      }
      // outside click
      // ... do whatever on click outside here ...
      // console.log("outside");
      setOpen(false);
    };

 
    const handleCheckChildElement = (event) => {
      const cloneCheckedCalendars = [...checkedCalendars];
      cloneCheckedCalendars.forEach((element) => {
        if (element.id === event.target.value)
          element.isChecked = event.target.checked;
      });
      setCheckedCalendars(cloneCheckedCalendars);
      filterCalendar(cloneCheckedCalendars);
    };

    const filterCalendar = (cloneCheckedCalendars) => {
      const filterCalendars = cloneCheckedCalendars
        .filter((element) => element.isChecked === false)
        .map((item) => item.id);
      const cloneSchedules = filterSchedules.filter((element) => {
        return filterCalendars.indexOf(element.calendarId) === -1;
      });

      // rerender
      calendarInstRef.current.clear();
      calendarInstRef.current.createSchedules(cloneSchedules, true);
      calendarInstRef.current.render();
    };

    // const capitalizeFirstLetter = (value = "") => {
    //   return [...value[0].toUpperCase(), ...value.slice(1)].join("");
    // };

    function createSchedule(schedule) {
      console.log("createSchedule");

      calendarInstRef.current.createSchedules([schedule]);
      const cloneFilterSchedules = [...filterSchedules];
      setFilterSchedules((prevState) => [...cloneFilterSchedules, schedule]);
    }

    function updateSchedule(schedule, changes) {
      console.log("updateSchedule");

      calendarInstRef.current.updateSchedule(
        schedule.id,
        schedule.calendarId,
        changes
      );
      const cloneFilterSchedules = [...filterSchedules];
      setFilterSchedules((prevState) =>
        cloneFilterSchedules.map((item) => {
          if (item.id === schedule.id) {
            return { ...item, ...changes };
          }
          return item;
        })
      );
    }


    return (
      <div>
    
        <div id="right" style={{ left: !showSlidebar && 0 }}>
          
          {showMenu && (
     
      
            <div id="menu">
                     
                 <div id="calendarList" className="lnb-calendars-d1">
                   {checkedCalendars.map((element, i) => {
                     return (
                       <div key={i} className="lnb-calendars-item">
                         <label>
                           <input
                             type="checkbox"
                             className="tui-full-calendar-checkbox-round"
                             defaultValue={element.id}
                             checked={element.isChecked}
                             onChange={handleCheckChildElement}
                           />
                           <span
                             style={{
                               borderColor: element.bgColor,
                               backgroundColor: element.isChecked
                                 ? element.bgColor
                                 : "transparent"
                             }}
                           />
                           <span>{element.name}</span>
                         </label>
                       </div>
                     );
                   })}
                 </div>
              <span
                ref={wrapperRef}
                style={{ marginRight: "4px" }}
                className={`dropdown ${open && "open"}`}
              >
                <button
                  id="dropdownMenu-calendarType"
                  className="btn btn-default btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={() => setOpen(!open)}
                >
                  <i
                    id="calendarTypeIcon"
                    className="calendar-icon ic_view_week"
                    style={{ marginRight: "4px" }}
                  />
                  <span id="calendarTypeName">{type}</span>&nbsp;
                  <i className="calendar-icon tui-full-calendar-dropdown-arrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="dropdownMenu-calendarType"
                >
                  <li role="presentation">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        calendarInstRef.current.changeView("day", true);
                        setType("Daily");
                        setOpen(false);
                      }}
                      className="dropdown-menu-title"
                      role="menuitem"
                      data-action="toggle-daily"
                    >
                      <i className="calendar-icon ic_view_day" />
                      Dia
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        calendarInstRef.current.changeView("week", true);
                        setType("Weekly");
                        setOpen(false);
                      }}
                      className="dropdown-menu-title"
                      role="menuitem"
                      data-action="toggle-weekly"
                    >
                      <i className="calendar-icon ic_view_week" />
                     Semanas
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        calendarInstRef.current.setOptions(
                          { month: { visibleWeeksCount: 6 } },
                          true
                        ); // or null
                        calendarInstRef.current.changeView("month", true);
                        setType("Month");
                        setOpen(false);
                      }}
                      className="dropdown-menu-title"
                      role="menuitem"
                      data-action="toggle-monthly"
                    >
                      <i className="calendar-icon ic_view_month" />
                      Mes
                    </a>
                  </li>
                
           
                
                </ul>
              </span>

              <span id="menu-navi">
                <button
                  type="button"
                  className="btn btn-default btn-sm move-today"
                  style={{ marginRight: "4px" }}
                  data-action="move-today"
                  onClick={() => {
                    // console.log("today");
                    calendarInstRef.current.today();
                    setRenderRangeText();
                  }}
                >
                 Mes actual
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm move-day"
                  style={{ marginRight: "4px" }}
                  data-action="move-prev"
                  onClick={() => {
                    // console.log("pre");
                    calendarInstRef.current.prev();
                    setRenderRangeText();
                  }}
                >
                  <i
                    className="calendar-icon ic-arrow-line-left"
                    data-action="move-prev"
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm move-day"
                  style={{ marginRight: "4px" }}
                  data-action="move-next"
                  onClick={() => {
                    // console.log("next");
                    calendarInstRef.current.next();
                    setRenderRangeText();
                  }}
                >
                  <i
                    className="calendar-icon ic-arrow-line-right"
                    data-action="move-next"
                  />
                </button>
              </span>
              <span id="renderRange" className="render-range">
                {renderRange}
              </span>
            </div>
          )}
          
          <div ref={tuiRef} style={{ height }} />
        </div>
      </div>
    );
  }
);

export default CustomTuiCalendar;
