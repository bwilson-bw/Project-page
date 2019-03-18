import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fromEvent } from 'rxjs';
import { takeUntil, mergeMap, filter } from 'rxjs/operators';

class Rxjs extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.box1 = React.createRef();
        this.subscriptions = [];
    }

    componentDidMount() {
        const { container, box1 } = this;

        const box1MouseDowns = fromEvent(box1.current, 'mousedown');

        const mouseMoves = fromEvent(container.current, 'mousemove');
        const mouseUps = fromEvent(document, 'mouseup');

        const containerBounds = container.current.getBoundingClientRect();

        const scrollableContainer = document.querySelector('.AppContentWrapper');

        const getScrollTop = () => scrollableContainer.scrollTop;

        const mouseLeavesContainer = filter(e => {
            return (
                e.clientX > containerBounds.left + 50 &&
                e.clientX < containerBounds.right - 50 &&
                e.clientY > containerBounds.top - getScrollTop() + 50 &&
                e.clientY < containerBounds.bottom - getScrollTop() - 50
            );
        });

        const dragBox1 = box1MouseDowns.pipe(
            mergeMap(e =>
                mouseMoves.pipe(
                    mouseLeavesContainer,
                    takeUntil(mouseUps)
                )
            )
        );

        const subscription = dragBox1.subscribe(e => {
            box1.current.style.left = e.clientX - container.current.offsetLeft - 280 - 50 + 'px';
            box1.current.style.top =
                e.clientY - container.current.offsetTop - 64 - 50 + getScrollTop() + 'px';
        });

        this.subscriptions.push(subscription);
    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    render() {
        return (
            <div className="home-body">
                <Typography variant="h1">RxJs</Typography>
                <Paper elevation={1}>
                    <div className="paper-body">
                        <Typography variant="h5" component="h3">
                            Here is an RxJs example
                        </Typography>
                        <div className="rxjs-container" ref={this.container}>
                            <div className="box1" ref={this.box1}>
                                <Typography variant="h6">Drag me</Typography>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Rxjs;
