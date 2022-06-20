import {ManType} from './Destructuring';
import exp from 'constants';

let props: ManType;

beforeEach(() =>{
    props = {
        name: 'Vladimir',
        age: 24,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Lenina'
            }
        }
    }
})

test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(24);
    expect(lessons.length).toBe(2);

    expect(age).toBe(24);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Lenina');
})

test(' ', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;
    const [ , , ls3] = props.lessons

    const [ , lsn2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
    expect(ls3.title).toBe('3');

    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'});

})