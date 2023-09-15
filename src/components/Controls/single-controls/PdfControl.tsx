import {Icon} from '@gravity-ui/uikit';
import React, {memo, useContext} from 'react';

import {useTranslation} from '../../../hooks';
import {Control} from '../../Control';
import {ControlsLayoutContext} from '../ControlsLayout';

const PdfIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
        <path d="M86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zm93.8-218.9c-2.9 0-3 30.9 2 46.9 5.6-10 6.4-46.9-2-46.9zm80.2 142.1c37.1 15.8 42.8 9 42.8 9 4.1-2.7-2.5-11.9-42.8-9zm-79.9-48c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM272 128a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zm21.9 254.4c-16.9 0-42.3-7.7-64-19.5-24.9 4.1-53.2 14.7-79 23.2-25.4 43.8-43.2 61.8-61.1 61.8-5.5 0-15.9-3.1-21.5-10-19.1-23.5 27.4-54.1 54.5-68 .1 0 .1-.1.2-.1 12.1-21.2 29.2-58.2 40.8-85.8-8.5-32.9-13.1-58.7-8.1-77 5.4-19.7 43.1-22.6 47.8 6.8 5.4 17.6-1.7 45.7-6.2 64.2 9.4 24.8 22.7 41.6 42.7 53.8 19.3-2.5 59.7-6.4 73.6 7.2 11.5 11.4 9.5 43.4-19.7 43.4z" opacity=".4"/>
        <path d="M377 105 279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zM240 331.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM86.1 428.1c5.8-15.7 28.2-33.9 34.9-40.2-21.7 34.8-34.9 41-34.9 40.2zm93.8-218.9c8.4 0 7.6 36.9 2 46.9-5-16-4.9-46.9-2-46.9zM151.8 366c11.1-19.4 20.7-42.5 28.4-62.7 9.6 17.4 21.8 31.2 34.5 40.8-23.9 4.7-44.6 14.9-62.9 21.9zm151.1-5.7s-5.7 6.8-42.8-9c40.3-2.9 46.9 6.3 42.8 9z" class="file-pdf_svg__fa-primary"/>
    </svg>
`;

interface ControlProps {
    pdfLink: string;
}

const PdfControl = memo<ControlProps>((props) => {
    const {t} = useTranslation('controls');
    const {controlClassName, controlSize, isVerticalView, popupPosition} =
        useContext(ControlsLayoutContext);
    const {pdfLink} = props;

    return (
        <Control
            size={controlSize}
            className={controlClassName}
            isVerticalView={isVerticalView}
            tooltipText={t('pdf-text')}
            icon={(args) => <Icon data={PdfIcon} {...args} />}
            popupPosition={popupPosition}
            href={pdfLink}
            target="_blank"
            rel="noreferrer noopener"
        />
    );
});

PdfControl.displayName = 'PdfControl';

export default PdfControl;
