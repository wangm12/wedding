import { motion } from "framer-motion";
import RedFingerprint from '/assets/images/red-fingerprint.png';
import "./index.css";

export default function Calendar() {
    return (
        <div className="calendar__wrapper">
            <div className="calendar__container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="7">Sep 2024</th>
                        </tr>
                        <tr className="calendar__week__title">
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <div>
                                <motion.img variants={HeartImageVariants} className="calendar__active" src={RedFingerprint} alt="red-fingerprint" />
                                <td>22</td>
                            </div>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td colSpan={1} />
                            <td colSpan={1} />
                            <td colSpan={1} />
                            <td colSpan={1} />
                            <td colSpan={1} />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

const HeartImageVariants = {
    hidden: {
      scale: 0.2,
      x: "-50%",
    },
    show: {
      scale: [0.2, 1.5, 1], // Keyframes for scale
      x: "-50%",
      transition: {
        duration: 1.5, // Total duration of the animation
        ease: [0.6, 0.01, 0, 0.95],
        times: [0, 0.5, 1], // Define when each scale value should occur during the transition
      },
    },
    exit: {
      opacity: 0,
    },
  };
  