import React from 'react';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecommendCar from "./recommend-car.component";

enzyme.configure({ adapter: new Adapter() });

describe('<RecommendCar />', () => {
    it('renders input field', () => {
        const editor = enzyme.shallow(<RecommendCar />);
        expect(editor.find('input'));
    });

    it('renders the output table', () => {
        const editor = enzyme.shallow(<RecommendCar />);
        const expectedOutput =
        '<table>' + 
        '<tr>' + 
        '</tr>' + 
        '</table>';

        const realOutput = editor.find('table').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
});
