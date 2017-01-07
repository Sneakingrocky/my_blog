module GeneralHelpers
  def nav_link_class(section)
    classes = ['nav-links']
    if current_page.data.section == section
      classes << 'active'
    end
    classes.join(' ')
  end
end
