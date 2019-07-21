import * as React from 'react';
import { createStyles, WithStyles, withStyles, mergeClasses } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import MuiButton from '@material-ui/core/Button';

//图标
import UnoderedListIcon from '@material-ui/icons/FormatListBulleted';
import OderedListIcon from '@material-ui/icons/FormatListNumbered';
import BoldIcon from '@material-ui/icons/FormatBold'
import QuoteIcon from '@material-ui/icons/FormatQuote'
import LinkIcon from '@material-ui/icons/InsertLink'
import ImageIcon from '@material-ui/icons/InsertPhoto'
import TitleIcon from '@material-ui/icons/Title'
import ParagraphIcon from '@material-ui/icons/TextFields'
import { styled } from '@material-ui/core';

const styles = createStyles({
    bar: {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.12)",
        zIndex: 100
    },
});

const Button = styled(MuiButton)({
    color: "#606c76",
    height: "4rem"
});

type propType = WithStyles<typeof styles> & {
    callback?: {
        para?: ()=>void,
        title?: ()=>void,
        quote?: ()=>void,
        ul?: ()=>void,
        ol?: ()=>void,
        link?: ()=>void,
        img?: ()=>void,
        bold?: ()=>void,
    }
}

const Editor = (props: propType) => {
    const { classes, callback } = props;

    return (
        <div className={classes.bar}>
            <Tooltip title="段落" placement="top">
                <Button onClick={callback.para}>
                    <ParagraphIcon></ParagraphIcon>
                </Button>
            </Tooltip>
            <Tooltip title="小标题" placement="top">
                <Button onClick={callback.title}>
                    <TitleIcon></TitleIcon>
                </Button>
            </Tooltip>
            <Tooltip title="引用" placement="top">
                <Button onClick={callback.quote}>
                    <QuoteIcon></QuoteIcon>
                </Button>
            </Tooltip>
            <Tooltip title="无序列表" placement="top">
                <Button onClick={callback.ul}>
                    <UnoderedListIcon></UnoderedListIcon>
                </Button>
            </Tooltip>
            <Tooltip title="有序列表" placement="top">
                <Button onClick={callback.ol}>
                    <OderedListIcon></OderedListIcon>
                </Button>
            </Tooltip>
            <Tooltip title="添加链接" placement="top">
                <Button onClick={callback.link}>
                    <LinkIcon></LinkIcon>
                </Button>
            </Tooltip>
            <Tooltip title="添加图片" placement="top">
                <Button onClick={callback.img}>
                    <ImageIcon></ImageIcon>
                </Button>
            </Tooltip>
            <Tooltip title="加粗" placement="top">
                <Button onClick={callback.bold}>
                    <BoldIcon></BoldIcon>
                </Button>
            </Tooltip>
        </div>
    )
}

export default withStyles(styles)(Editor)


