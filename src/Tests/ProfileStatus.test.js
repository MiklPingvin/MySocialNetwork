import TestRender from 'react-test-renderer'
import ProfileStatus from "../components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";

describe('ProfileStatus ', () => {
    test('status on state', () => {
        const component = TestRender.create(<ProfileStatus status={'status'}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('status')
    })
    test('is span? - no editMode', () => {
        const component = TestRender.create(<ProfileStatus status={'status'}/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children.length).toBe(1)
    })
    test('is span right? - no editMode', () => {
        const component = TestRender.create(<ProfileStatus status={'status'}/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe('status')
    })
    test('is input?-no edit', () => {
        const component = TestRender.create(<ProfileStatus status={'status'}/>)
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
    test('correct active editMode', () => {
        const component = TestRender.create(<ProfileStatus status={'status'}/>)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        let button = root.findAllByType("button")
        expect(input.props.value).toBe('status')
        expect(button.length).toBe(2)
        expect(() => {
            let span = root.findByType("span")
        }).toThrow()
    })
    test('call callback', () => {
        const Callback = jest.fn()
        const component = TestRender.create(<ProfileStatus status={'status'} updateUserStatus={Callback}/>)
        const instance = component.getInstance()
        instance.deactivateEditModeWithSave()
        expect(Callback.mock.calls.length).toBe(1)
    })
})