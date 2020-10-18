export const create = attribute => {
  return {
    attribute: attribute,
    moving: false,
    cardMoveAreas: null,
    createCardTo: function () {
      const el = document.createElement('div');
      el.classList.add('card-to');
      return el;
    },
    itemMouseDown: function (event) {
      if (event.target.parentElement.hasAttribute('insert-mode')) {
        this.moving = false;
      } else {
        this.moving = true;
        if (event.target.parentElement.hasAttribute('extract-mode')) {
          const clone = event.target.cloneNode(true);
          clone.addEventListener('mousedown', this.itemMouseDown.bind(this));
          event.target.parentElement.insertBefore(clone, event.target.nextSibling);
        }
        event.target.addEventListener('mousemove', this.itemMouseMove.bind(this));
        event.target.addEventListener('mouseup', this.itemMouseUp.bind(this));
        event.target.style.top = `${event.target.getBoundingClientRect().top}px`;
        event.target.style.left = `${event.target.getBoundingClientRect().left}px`;
        event.target.style.position = 'fixed';
        event.target.style.zIndex = 10;
      }
    },
    itemMouseMove: function (event) {
      if (this.moving) {
        event.target.style.top = `${event.y - event.target.clientHeight / 2}px`;
        event.target.style.left = `${event.x - event.target.clientWidth / 2}px`;
        const dropAreaItem = document.elementsFromPoint(event.clientX, event.clientY).find(
          element =>
            (
              element.hasAttribute(`${this.attribute}-item`) &&
              element.getAttribute(`${this.attribute}-item-id`) !== event.target.getAttribute(`${this.attribute}-item-id`)
            ) ||
            element.classList.contains('card-to')
        );
        if (dropAreaItem) {
          if (!dropAreaItem.parentElement.hasAttribute('extract-mode')) {
            if (!dropAreaItem.classList.contains('card-to')) {
              document.querySelectorAll('.card-to').forEach(e => e.remove());
              dropAreaItem.parentElement.insertBefore(this.createCardTo(), dropAreaItem);
            }
          }
        } else {
          const area = document.elementsFromPoint(event.clientX, event.clientY).find(element => element.hasAttribute(this.attribute));
          document.querySelectorAll('.card-to').forEach(e => e.remove());
          if (area && !area.hasAttribute('extract-mode')) {
            area.appendChild(this.createCardTo());
          }
        }
      }
    },
    itemMouseUp: function (event) {
      if (this.moving) {
        event.target.removeEventListener('mousemove', e => this.itemMouseMove);
        event.target.removeEventListener('mouseup', e => this.itemMouseUp);
        const dropArea = document.elementsFromPoint(event.clientX, event.clientY).find(element => element.hasAttribute(this.attribute));
        const areas = {
          from: null,
          to: null
        }
        if (!dropArea.hasAttribute('extract-mode')) {
          if (dropArea) {
            const dropTo = document.elementsFromPoint(event.clientX, event.clientY).find(
              element =>
                element.classList.contains('card-to') ||
                (
                  element.hasAttribute(`${this.attribute}-item`) &&
                  element.getAttribute(`${this.attribute}-item-id`) != event.target.getAttribute(`${this.attribute}-item-id`)
                )
            );
            event.target.setAttribute(`${this.attribute}-id`, dropArea.getAttribute(`${this.attribute}-id`))
            areas.from = event.target.parentElement;
            if (dropTo) {
              dropArea.insertBefore(event.target, dropTo);
            } else {
              dropArea.appendChild(event.target);
            }
            areas.to = event.target.parentElement;
          }
          event.target.style.removeProperty('top');
          event.target.style.removeProperty('left');
          event.target.style.removeProperty('position');
          event.target.style.removeProperty('z-index');
          if (areas.from && areas.to) {
            this.reorderAreaIds(areas.from);
            this.reorderAreaIds(areas.to);
            if (areas.from.getAttribute(`${this.attribute}-id`) === areas.to.getAttribute(`${this.attribute}-id`)) {
              this.doEvents.moveSameArea(this, areas.to);
            } else {
              this.doEvents.moveDifferentAreas(this, areas.from, areas.to);
            }
          }
        } else {
          event.target.remove();
        }
        document.querySelectorAll('.card-to').forEach(e => e.remove())
        this.moving = false;
      }
    },
    reorderAreaIds: function (area) {
      for (let i = 0; i < area.children.length; i++) {
        const child = area.children[i];
        child.setAttribute(`${this.attribute}-item-id`, `${area.getAttribute(`${this.attribute}-id`)}-${i}`)
      }
    },
    initArea: function (that, area, areaId) {
      for (let i = 0; i < area.children.length; i++) {
        const child = area.children[i];
        child.setAttribute(`${this.attribute}-item`, true);
        child.setAttribute(`${this.attribute}-id`, areaId);
        child.setAttribute(`${this.attribute}-item-id`, `${areaId}-${i}`);
        child.addEventListener('mousedown', that.itemMouseDown.bind(that));
      }
    },
    initCardMove: function (that) {
      that.cardMoveAreas = document.querySelectorAll('[' + that.attribute + ']');
      that.cardMoveAreas.forEach((area, i) => {
        area.setAttribute(`${this.attribute}-id`, i);
        that.initArea(that, area, i);
      });
      that.doEvents.init(that);
    },
    events: {
      init: null,
      moveSameArea: null,
      moveDifferentAreas: null
    },
    doEvents: {
      init: that => {
        if (that.events.init) {
          that.events.init()
        }
      },
      moveSameArea: (that, area) => {
        if (that.events.moveSameArea) {
          that.events.moveSameArea(area);
        }
      },
      moveDifferentAreas: (that, areaFrom, areaTo) => {
        if (that.events.moveDifferentAreas) {
          that.events.moveDifferentAreas(areaFrom, areaTo)
        }
      },
    }
  }
};
