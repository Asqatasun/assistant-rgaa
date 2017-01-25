import React, {PropTypes} from 'react';
import classNames from 'classnames';
import renderIf from 'render-if';
import {withState} from 'recompose';
import {map, includes, noop} from 'lodash';
import {FormattedMessage} from 'react-intl';
import {Wrapper, Button, Menu} from 'react-aria-menubutton';
import ThemesListItem from './ThemesListItem';



const icons = {
	1: 'image.png',
	2: 'application-sidebar.png',
	3: 'color.png',
	4: 'film.png',
	5: 'table.png',
	6: 'link.png',
	7: 'script-text.png',
	8: 'navigation-090.png',
	9: 'newspaper.png',
	10: 'wand.png',
	11: 'ui-toolbar.png',
	12: 'arrow-split.png',
	13: 'book-brown.png'
};

/**
 *
 */
function ThemesList({themes, activeTheme, inactiveThemes, isOpen, setOpen}) {
	return (
		<Wrapper
			className={classNames('ThemesList', {'is-open': isOpen})}
			onSelection={(href) => {
				document.location.href = href;
			}}
			onMenuToggle={(menu) => setOpen(menu.isOpen)}
		>
			<Button
				tag="h2"
				className="ThemesList-title Title Title--accent ThemesList-toggle"
			>
				<FormattedMessage id="ThemesList.title" />
			</Button>
			<Menu tag="ul" className="ThemesList-list">
				{map(themes, (theme) =>
					<ThemesListItem
						{...theme}
						icon={icons[theme.id]}
						isActive={activeTheme === theme.id}
						isDisabled={includes(inactiveThemes, theme.id)}
						key={theme.id}
					/>
				)}
			</Menu>
		</Wrapper>
	);
}

ThemesList.propTypes = {
	themes: PropTypes.object.isRequired,
	activeTheme: PropTypes.string,
	inactiveThemes: PropTypes.array,
	isOpen: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired
};

ThemesList.defaultProps = {
	activeTheme: {
		id: null
	},
	inactiveThemes: []
};

export default withState('isOpen', 'setOpen', false)(ThemesList);
