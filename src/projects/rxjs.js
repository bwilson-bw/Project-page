import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fromEvent } from 'rxjs';
import { takeUntil, mergeMap, filter, pairwise, map } from 'rxjs/operators';

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

        const mouseMovesUntil = mouseMoves.pipe(takeUntil(mouseUps));

        const grabCoordinates = box1MouseDowns.pipe(
            mergeMap(e =>
                mouseMovesUntil.pipe(pairwise()).pipe(
                    map(pair => {
                        const x0 = pair[0].clientX;
                        const y0 = pair[0].clientY;
                        const x1 = pair[1].clientX;
                        const y1 = pair[1].clientY;
                        return { x: x1 - x0, y: y1 - y0 };
                    })
                )
            )
        );

        const mouseLeavesContainer = grabCoordinates.pipe(
            filter(e => {
                const bounds = box1.current.getBoundingClientRect();

                return (
                    bounds.left + e.x >= containerBounds.left &&
                    bounds.right + e.x <= containerBounds.right &&
                    bounds.top + e.y >= containerBounds.top - getScrollTop() &&
                    bounds.bottom + e.y <= containerBounds.bottom - getScrollTop()
                );
            })
        );

        let L = 0;
        let T = 0;

        const sub = mouseLeavesContainer.subscribe(e => {
            L += e.x;
            T += e.y;

            box1.current.style.left = L + 'px';
            box1.current.style.top = T + 'px';
        });

        this.subscriptions.push(sub);
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
