import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import appointmentBg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{ background: `url(${appointmentBg}) ` }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} height={80} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist chair' />
                <div className='pr-16'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;