(function (React, designSystem, adminjs) {
	'use strict';

	function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

	var React__default = /*#__PURE__*/_interopDefault(React);

	function ProfilePicture(props) {
	  const {
	    property,
	    record
	  } = props;
	  const url = record.params[property.name];
	  return /*#__PURE__*/React__default.default.createElement("img", {
	    src: url,
	    alt: "Profile",
	    referrerPolicy: "origin-when-cross-origin"
	  });
	}

	const PasswordEdit = props => {
	  const {
	    onChange,
	    property,
	    record,
	    resource
	  } = props;
	  const {
	    translateButton: tb
	  } = adminjs.useTranslation();
	  const [showPassword, togglePassword] = React.useState(false);
	  React.useEffect(() => {
	    if (!showPassword) {
	      onChange(property.name, '');
	    }
	  }, [onChange, showPassword]);
	  // For new records always show the property
	  if (!record.id) {
	    return /*#__PURE__*/React__default.default.createElement(adminjs.BasePropertyComponent.Password.Edit, props);
	  }
	  return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, showPassword && /*#__PURE__*/React__default.default.createElement(adminjs.BasePropertyComponent.Password.Edit, props), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
	    mb: "xl"
	  }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
	    onClick: () => togglePassword(!showPassword),
	    type: "button"
	  }, showPassword ? tb('cancel', resource.id) : tb('changePassword', resource.id)))));
	};

	AdminJS.UserComponents = {};
	AdminJS.UserComponents.ProfilePicture = ProfilePicture;
	AdminJS.UserComponents.PasswordEditComponent = PasswordEdit;

})(React, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9wcm9maWxlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9wYXNzd29yZHMvYnVpbGQvY29tcG9uZW50cy9QYXNzd29yZEVkaXRDb21wb25lbnQuanN4IiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tIFwiYWRtaW5qc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGljdHVyZShwcm9wczogU2hvd1Byb3BlcnR5UHJvcHMpIHtcblx0Y29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wcztcblx0Y29uc3QgdXJsID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5uYW1lXTtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHRzcmM9e3VybH1cblx0XHRcdGFsdD1cIlByb2ZpbGVcIlxuXHRcdFx0cmVmZXJyZXJQb2xpY3k9XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQaWN0dXJlO1xuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgUGFzc3dvcmRFZGl0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uOiB0YiB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCB0b2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsICcnKTtcbiAgICAgICAgfVxuICAgIH0sIFtvbkNoYW5nZSwgc2hvd1Bhc3N3b3JkXSk7XG4gICAgLy8gRm9yIG5ldyByZWNvcmRzIGFsd2F5cyBzaG93IHRoZSBwcm9wZXJ0eVxuICAgIGlmICghcmVjb3JkLmlkKSB7XG4gICAgICAgIHJldHVybiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKDxCb3g+XG4gICAgICB7c2hvd1Bhc3N3b3JkICYmIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9Lz59XG4gICAgICA8Qm94IG1iPVwieGxcIj5cbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IHRiKCdjYW5jZWwnLCByZXNvdXJjZS5pZCkgOiB0YignY2hhbmdlUGFzc3dvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94Pik7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRFZGl0O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcHJvZmlsZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUHJvZmlsZVBpY3R1cmUgPSBQcm9maWxlUGljdHVyZVxuaW1wb3J0IFBhc3N3b3JkRWRpdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2J1aWxkL2NvbXBvbmVudHMvUGFzc3dvcmRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5QYXNzd29yZEVkaXRDb21wb25lbnQgPSBQYXNzd29yZEVkaXRDb21wb25lbnQiXSwibmFtZXMiOlsiUHJvZmlsZVBpY3R1cmUiLCJwcm9wcyIsInByb3BlcnR5IiwicmVjb3JkIiwidXJsIiwicGFyYW1zIiwibmFtZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFsdCIsInJlZmVycmVyUG9saWN5IiwiUGFzc3dvcmRFZGl0Iiwib25DaGFuZ2UiLCJyZXNvdXJjZSIsInRyYW5zbGF0ZUJ1dHRvbiIsInRiIiwidXNlVHJhbnNsYXRpb24iLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaWQiLCJCYXNlUHJvcGVydHlDb21wb25lbnQiLCJQYXNzd29yZCIsIkVkaXQiLCJCb3giLCJtYiIsIlRleHQiLCJ0ZXh0QWxpZ24iLCJCdXR0b24iLCJvbkNsaWNrIiwidHlwZSIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIlBhc3N3b3JkRWRpdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUdBLFNBQVNBLGNBQWNBLENBQUNDLEtBQXdCLEVBQUU7R0FDakQsTUFBTTtLQUFFQyxRQUFRO0NBQUVDLElBQUFBLE1BQUFBO0NBQU8sR0FBQyxHQUFHRixLQUFLLENBQUE7R0FDbEMsTUFBTUcsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQU0sQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQTtHQUN4QyxvQkFDQ0Msc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEtBQUEsRUFBQTtDQUNDQyxJQUFBQSxHQUFHLEVBQUVMLEdBQUk7Q0FDVE0sSUFBQUEsR0FBRyxFQUFDLFNBQVM7Q0FDYkMsSUFBQUEsY0FBYyxFQUFDLDBCQUFBO0NBQTBCLEdBQ3pDLENBQUMsQ0FBQTtDQUVKOztDQ1ZBLE1BQU1DLFlBQVksR0FBSVgsS0FBSyxJQUFLO0dBQzVCLE1BQU07S0FBRVksUUFBUTtLQUFFWCxRQUFRO0tBQUVDLE1BQU07Q0FBRVcsSUFBQUEsUUFBQUE7Q0FBUyxHQUFDLEdBQUdiLEtBQUssQ0FBQTtHQUN0RCxNQUFNO0NBQUVjLElBQUFBLGVBQWUsRUFBRUMsRUFBQUE7SUFBSSxHQUFHQyxzQkFBYyxFQUFFLENBQUE7R0FDaEQsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGNBQWMsQ0FBQyxHQUFHQyxjQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDdERDLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO0tBQ1osSUFBSSxDQUFDSCxZQUFZLEVBQUU7Q0FDZkwsTUFBQUEsUUFBUSxDQUFDWCxRQUFRLENBQUNJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtDQUMvQixLQUFBO0NBQ0osR0FBQyxFQUFFLENBQUNPLFFBQVEsRUFBRUssWUFBWSxDQUFDLENBQUMsQ0FBQTtDQUM1QjtDQUNBLEVBQUEsSUFBSSxDQUFDZixNQUFNLENBQUNtQixFQUFFLEVBQUU7S0FDWixvQkFBT2Ysc0JBQUEsQ0FBQUMsYUFBQSxDQUFDZSw2QkFBcUIsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUt4QixLQUFPLENBQUMsQ0FBQTtDQUM1RCxHQUFBO0dBQ0Esb0JBQVFNLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2tCLGdCQUFHLFFBQ1RSLFlBQVksaUJBQUlYLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2UsNkJBQXFCLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFLeEIsS0FBTyxDQUFDLGVBQ2xFTSxzQkFBQSxDQUFBQyxhQUFBLENBQUNrQixnQkFBRyxFQUFBO0NBQUNDLElBQUFBLEVBQUUsRUFBQyxJQUFBO0NBQUksR0FBQSxlQUNWcEIsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDb0IsaUJBQUksRUFBQTtDQUFDQyxJQUFBQSxTQUFTLEVBQUMsUUFBQTtDQUFRLEdBQUEsZUFDdEJ0QixzQkFBQSxDQUFBQyxhQUFBLENBQUNzQixtQkFBTSxFQUFBO0NBQUNDLElBQUFBLE9BQU8sRUFBRUEsTUFBTVosY0FBYyxDQUFDLENBQUNELFlBQVksQ0FBRTtDQUFDYyxJQUFBQSxJQUFJLEVBQUMsUUFBQTtJQUN4RGQsRUFBQUEsWUFBWSxHQUFHRixFQUFFLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUNRLEVBQUUsQ0FBQyxHQUFHTixFQUFFLENBQUMsZ0JBQWdCLEVBQUVGLFFBQVEsQ0FBQ1EsRUFBRSxDQUN0RSxDQUNKLENBQ0gsQ0FDRixDQUFDLENBQUE7Q0FDVixDQUFDOztDQzFCRFcsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0NBRTNCRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ2xDLGNBQWMsR0FBR0EsY0FBYyxDQUFBO0NBRXREaUMsT0FBTyxDQUFDQyxjQUFjLENBQUNDLHFCQUFxQixHQUFHQSxZQUFxQjs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxXX0=
